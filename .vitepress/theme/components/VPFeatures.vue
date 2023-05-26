<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import VPFeature from 'vitepress/dist/client/theme-default/components/VPFeature.vue'

export interface Feature {
  icon?: DefaultTheme.FeatureIcon
  title: string
  details: string
  link?: string
  linkText?: string
  tag?: string
}

const props = defineProps<{
  features: Feature[]
}>()

const tagFeaturesObj = {}
props.features.forEach(element => {
  if (!tagFeaturesObj[element.tag || 'others']) {
    tagFeaturesObj[element.tag || 'others'] = []
  }
  tagFeaturesObj[element.tag || 'others'].push(element)
});
// grid
const tagFeaturesArray = []
Object.keys(tagFeaturesObj).forEach(element => {
  const obj = {
    tag: element,
    features: tagFeaturesObj[element],
    grid: (() => {
      const length = tagFeaturesObj[element].length
      if (!length) {
        return
      } else if (length === 2) {
        return 'grid-2'
      } else if (length === 3) {
        return 'grid-3'
      } else if (length % 3 === 0) {
        return 'grid-6'
      } else if (length > 3) {
        return 'grid-4'
      }
    })()
  }
  tagFeaturesArray.push(obj)
});
</script>

<template>
  <div v-if="features" class="VPFeatures">
    <div class="container"
      v-for="tagFeatures in tagFeaturesArray"
      :key="tagFeatures.tag"
      :id="tagFeatures.tag"
    >
      <div class="tag" v-if="tagFeatures.tag != 'others'">
        <span># {{tagFeatures.tag}}</span>
      </div>
      <div class="items">
        <div
          v-for="feature in tagFeatures.features"
          :key="feature.title"
          class="item"
          :class="[tagFeatures.grid]"
        >
          <VPFeature
            :icon="feature.icon"
            :title="feature.title"
            :details="feature.details"
            :link="feature.link"
            :link-text="feature.linkText"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.tag {
  padding: 20px 0;
}
.tag span {
  font-size: 20px;
  font-weight: bold;
  color: var(--vp-button-brand-bg);
  background-image: -webkit-linear-gradient(right, #9e34fe 30%, #419bff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>
