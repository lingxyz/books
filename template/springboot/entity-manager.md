# entityManager

## 多表关联查询 + 类型转换

::: code-group

```java [controller]
/**
	 * 查询记录（按用户）
	 * @param codeId: 码id
	 */
	@GetMapping(path="/search/log")
	@Token
	@SuppressWarnings("unchecked") // 避免类转换告警（由于泛型擦除机制）
	public @ResponseBody Result searchLog(
		@NotNull(message="用户不存在！") @LoginUser CustUser user
	) {
		String sqlString = "select csl.create_time as createTime, sb.name as brandName, sp.name as productName, spt.name as productTypeName " +
			"FROM code_search_log as csl " +
			"LEFT JOIN store_brand as sb " +
			"ON csl.brand_id = sb.id " +
			"LEFT JOIN store_product as sp " +
			"ON csl.product_id = sp.id " +
			"LEFT JOIN store_product_type as spt " +
			"ON csl.product_type_id = spt.id " +
			"where csl.cust_user_id = :userId " +
			"order by csl.create_time desc";
		List<UserSearchLogVO> data = (List<UserSearchLogVO>)entityManager.createNativeQuery(sqlString)
			.setParameter("userId", user.getId())
			.unwrap(NativeQueryImpl.class) // 类型转换
			.setResultTransformer(Transformers.aliasToBean(UserSearchLogVO.class)) // 类型转换
			.getResultList();

		return ResultResponse.success(data);
	}
```

```java [UserSearchLogVO.java]
@Data
public class UserSearchLogVO {
  // 品牌名称
  private String brandName;
  // 产品名称
  private String productName;
  // 产品型号
  private String productTypeName;
  // 查询时间
  private Date createTime;
}
```
:::

以上代码改为为 JpaRepository：

::: code-group
```java [CodeSearchLogRepository.java]
public interface CodeSearchLogRepository extends JpaRepository<CodeSearchLog, Integer>, JpaSpecificationExecutor<CodeSearchLog>  {
  // 根据 二维码id 查询 扫码查询记录
  @Query(value = "SELECT csl.create_time as createTime, sb.name as brandName, sp.name as productName, spt.name as productTypeName " +
    "FROM code_search_log as csl " +
    "LEFT JOIN store_brand as sb " +
    "ON csl.brand_id = sb.id " +
    "LEFT JOIN store_product as sp " +
    "ON csl.product_id = sp.id " +
    "LEFT JOIN store_product_type as spt " +
    "ON csl.product_type_id = spt.id " +
    "WHERE csl.cust_user_id = :userId " +
    "ORDER BY csl.create_time DESC", nativeQuery = true)
  List<UserSearchLogVO> findByUserId(@Param("userId") Integer userId);
}
```

```java [controller 调用]
List<UserSearchLogVO> data = codeSearchLogRepository.findByUserId(user.getId());
:::
