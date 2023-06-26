<template>
  <div class="wrapper">
    <h1 slot="header">Tabs Components</h1>
    <tab-demo></tab-demo>
    <div>
      <h2>Basic tabs</h2>
        <HwTab :tabs="basicTabs" @activeTab="activeTabHandler">
          <template #content="{ active }">
            <div  v-for="(tab) in basicTabs">
              <template v-if="active === tab.value">
                <p> {{ tab.content }} </p>
              </template>
            </div>
          </template>
        </HwTab>
      <div class="v-model">
        Model Value : <span class="value">{{ activeTabValue }}</span>
      </div>
    </div>

    <div>
      <h2>Vertical tabs</h2>
      <HwTab :tabs="basicTabs" :vertical="true">
        <template #content="{ active }">
          <div  v-for="(tab) in basicTabs">
            <template v-if="active === tab.value">
              <p> {{ tab.content }} </p>
            </template>
          </div>
        </template>
      </HwTab>
    </div>

    <div>
      <h2>Disabled tabs</h2>
      <HwTab :tabs="disabledTabs"  active="tab2">
        <template #content="{ active }">
          <div  v-for="(tab) in disabledTabs">
            <template v-if="active === tab.value">
              <p> {{ tab.content }} </p>
            </template>
          </div>
        </template>
      </HwTab>
    </div>

    <div>
      <h2>Scrollable tabs</h2>
        <HwTab :tabs="scrollTabs" :scrollable='true' active="tab3">
          <template #content="{ active }">
            <div  v-for="(tab) in scrollTabs">
              <template v-if="active === tab.value">
                <p> {{ tab.content }} </p>
              </template>
            </div>
          </template>
        </HwTab>
    </div>

    <div>
      <h2>Icon tabs</h2>
      <HwTab :tabs="tabs"  active="tab2">
        <template #content="{ active }">
          <div  v-for="(tab) in tabs">
            <template v-if="active === tab.value">
              <p> {{ tab.content }} </p>
            </template>
          </div>
        </template>
      </HwTab>
    </div>

  </div>
</template>

<script setup>
import HwTab from "@lib/tab/HwTab.vue";
import TabDemo from "../tab/TabDemo.vue";
import { ref, computed } from 'vue';

const basicTabs = ref([
  {
    content:'Tab1',
    value:'tab1',
  },
  {
    content:'Tab2',
    value:'tab2',
  },
  {
    content:'Tab3',
    value:'tab3',
  },
  {
    content:'Tab4',
    value:'tab4',
  },
])
const disabledTabs = ref([
  {
    content:'Tab1',
    value:'tab1',
    disabled:false
  },
  {
    content:'Tab2',
    value:'tab2',
    disabled:false
  },
  {
    content:'Tab3',
    value:'tab3',
    disabled:true
  },
  {
    content:'Tab4',
    value:'tab4',
    disabled:false
  },
])
const scrollTabs = ref([
  {
    content:'Tab1',
    value:'tab1',
  },
  {
    content:'Tab2',
    value:'tab2',
  },
  {
    content:'Tab3',
    value:'tab3',

  },
  {
    content:'Tab5',
    value:'tab5',
  },
  {
    content:'Tab6',
    value:'tab6',
  },
  {
    content:'Tab7',
    value:'tab7',
  },
  {
    content:'Tab8',
    value:'tab8',
  },
  {
    content:'Tab9',
    value:'tab9',
  },
  {
    content:'Tab10',
    value:'tab10',
  },
  {
    content:'Tab11',
    value:'tab11',
  },
  {
    content:'Tab12',
    value:'tab12',
  },
  {
    content:'Tab13',
    value:'tab13',
  },
  {
    content:'Tab14',
    value:'tab14',
  },
  {
    content:'Tab15',
    value:'tab15',
  },
  {
    content:'Tab16',
    value:'tab16',
  },
  {
    content:'Tab17',
    value:'tab17',
  },
  {
    content:'Tab18',
    value:'tab18',
  },
  {
    content:'Tab19',
    value:'tab19',
  },
  {
    content:'Tab20',
    value:'tab20',
  },
  {
    content:'Tab21',
    value:'tab21',
  }
])
const tabs = ref([
  {
    content:'tab1',
    value:'tab1',
    icon:'home',
    disabled:false
  },
  {
    content:'tab2',
    value:'tab2',
    icon:'arrow-right-to-bracket',
    disabled:false
  },
  {
    content:'tab3',
    value:'tab3',
    icon:'arrow-right-to-bracket',
    disabled:false
  },
  {
    content:'tab4',
    value:'tab4',
    icon:'arrow-right-to-bracket',
    disabled:false
  }
])

const activeTabValue = ref()
const activeTabHandler = tab => {
  if (!tab) return;
    activeTabValue.value = tab
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: palette-space-level(35);
  font-size: large;
  header {
    h1,
    h3 {
      text-shadow: 1px 1px 3px rgb(255, 255, 255);
    }
    h1 {
      margin: palette-space-level(50);
    }
    h3 {
      margin: 0;
    }
  }
  > div {
    padding:palette-space-level(15) palette-space-level(20);
    flex-direction: column;
    background: palette-color-level(white, 100);
    border-radius: palette-radius-level(5);
    box-shadow: 0 0 6px rgba(190, 190, 190, 0.44);
    display: flex;
    gap: palette-space-level(20);
    background: floralwhite;
    width: 100%;
    max-width: 1000px;
    .v-model {
      .value {
        font-weight: palette-font-weight-level(5);
        font-size: large;
      }
    }
  }
}
</style>
