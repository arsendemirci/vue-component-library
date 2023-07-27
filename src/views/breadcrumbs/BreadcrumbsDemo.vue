<template lang="">
  <div class="wrapper">
    <h1 slot="header">Breadcrumbs Components</h1>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>👀</span>Overview</h2>
          <p class="card-text">
            This project is actually a part of a vue3 component library project
            that is under development right now. hw-breadcrumbs is a custom
            component that takes advantage of many features of Vue3.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>🔫</span>Getting Started</h2>
          <p class="card-text">
            For hw-breadcrumbs to work correctly basically you need to provide
            options array and a placeholder. See the code example below:
          </p>
        </div>
      </div>

      <use-view>
        <template #template>
          <pre>
            <code class="language-html">
        
       &lt;hw-breadcrumbs :items="items" divider=">"&gt;
          &lt;template v-slot:prepend&gt;🎈&lt;/template&gt;
      &lt;/hw-breadcrumbs&gt;
          
          </code>
          </pre>
        </template>
        <template #script>
          <pre>
            <code class="language-html">
          &lt;script&gt; 
          export default {
            data: () => ({
              items: [
                {
                  name: "Home",
                  href: "/breadcrumbs",
                },
                {
                  name: "Children 1",
                  href: "/breadcrumbs/children1",
                },
                {
                  name: "Children 2",
                  href: "/breadcrumbs/children1/children2",
                  active: true,
                },
              ],
            }),
            components: {
              HwBreadcrumbs,
            },
          };
          &lt;/script&gt;
        </code>
          </pre>
        </template>
        <template #component>
          <hw-breadcrumbs :items="items" divider=">">
            <template v-slot:prepend> 🎈 </template>
          </hw-breadcrumbs>
        </template>
      </use-view>

      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>💣</span>Features</h2>
          <ul class="card-list">
            <li>Supports dynamic routing</li>
            <li>
              Customizable divider; You can do it as icon with slot, as text
              with props
            </li>
            <li>
              There is a text color that indicates you are on the current route
            </li>
            <li>You can add an icon on top of the design.</li>
            <li>You can configure it with the router</li>
          </ul>
        </div>
      </div>
      <h2 class="card-title"><span>💊</span>Props</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Props</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>items</td>
            <td>Array</td>
            <td>[]</td>
            <td>(required) Divider array</td>
          </tr>
          <tr>
            <td>divider</td>
            <td>String</td>
            <td>/</td>
            <td>
              It is not necessary. By default the divider uses the '/' symbol.
            </td>
          </tr>
          <tr>
            <td>dynamic</td>
            <td>Boolean</td>
            <td>False</td>
            <td>
              If dynamic routing is to be used, the router must be configured
              and set to true
            </td>
          </tr>
        </tbody>
      </table>
      <h2 class="card-title"><span>🎮</span>Slots</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Slots</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>divider</td>
            <td>You can design the divider with icon</td>
          </tr>
          <tr>
            <td>prepend</td>
            <td>You can add an icon on top of the design</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h2>Prepend slot example</h2>
      <use-view>
        <template #template>
          <pre>
            <code class="language-html">
        
       &lt;hw-breadcrumbs :items="items" divider="|"&gt;
          &lt;template v-slot:prepend&gt;🎈&lt;/template&gt;
      &lt;/hw-breadcrumbs&gt;
         
          </code>
          </pre>
        </template>
        <template #script>
          <pre>
            <code class="language-html">
          &lt;script&gt; 
          export default {
            data: () => ({
              items: [
                {
                  name: "Home",
                  href: "/breadcrumbs",
                },
                {
                  name: "Children 1",
                  href: "/breadcrumbs/children1",
                },
                {
                  name: "Children 2",
                  href: "/breadcrumbs/children1/children2",
                  active: true,
                },
              ],
            }),
            components: {
              HwBreadcrumbs,
            },
          };
          &lt;/script&gt;
        </code>
          </pre>
        </template>
        <template #component>
          <hw-breadcrumbs :items="items" divider="|">
            <template v-slot:prepend> 🎈 </template>
          </hw-breadcrumbs>
        </template>
      </use-view>
    </div>
    <div>
      <h2>Divider slot example</h2>
      <use-view>
        <template #template>
          <pre>
            <code class="language-html">
        
       &lt;hw-breadcrumbs :items="items"&gt;
          &lt;template v-slot:divider&gt;🐱&lt;/template&gt;
      &lt;/hw-breadcrumbs&gt;
         
          </code>
          </pre>
        </template>
        <template #script>
          <pre>
            <code class="language-html">
          &lt;script&gt; 
          export default {
            data: () => ({
              items: [
                {
                  name: "Home",
                  href: "/breadcrumbs",
                },
                {
                  name: "Children 1",
                  href: "/breadcrumbs/children1",
                },
                {
                  name: "Children 2",
                  href: "/breadcrumbs/children1/children2",
                  active: true,
                },
              ],
            }),
            components: {
              HwBreadcrumbs,
            },
          };
          &lt;/script&gt;
        </code>
          </pre>
        </template>
        <template #component>
          <hw-breadcrumbs :items="items">
            <template v-slot:divider> 🐱 </template>
          </hw-breadcrumbs>
        </template>
      </use-view>
     
    </div>
    <div>
      <h2>Divider props example</h2>
      <use-view>
        <template #template>
          <pre>
            <code class="language-html">
        
       &lt;hw-breadcrumbs :items="items" divider="-"&gt;&lt;/hw-breadcrumbs&gt;
          
          </code>
          </pre>
        </template>
        <template #script>
          <pre>
            <code class="language-html">
          &lt;script&gt; 
          export default {
            data: () => ({
              items: [
                {
                  name: "Home",
                  href: "/breadcrumbs",
                },
                {
                  name: "Children 1",
                  href: "/breadcrumbs/children1",
                },
                {
                  name: "Children 2",
                  href: "/breadcrumbs/children1/children2",
                  active: true,
                },
              ],
            }),
            components: {
              HwBreadcrumbs,
            },
          };
          &lt;/script&gt;
        </code>
          </pre>
        </template>
        <template #component>
          <hw-breadcrumbs :items="items" divider="-"> </hw-breadcrumbs>
        </template>
      </use-view>
    </div>
    <div>
      <h2>Dynamic routing example</h2>
      <p>
        To use this feature, you must set the dynamic props property to True.
        You need to configure the routing file.
      </p>
      <use-view>
        <template #template>
          <pre>
            <code class="language-html">
        
         
     &lt;hw-breadcrumbs :items="items" :dynamic="true" divider="!"&gt;
             &lt;template v-slot:divider&gt;🎈&lt;/template&gt;
     &lt;/hw-breadcrumbs&gt;
            &lt;router-view&gt;&lt;/router-view&gt;
          
          </code>
          </pre>
        </template>
        <template #script>
          <pre>
            <code class="language-html">
          &lt;script&gt; 
          export default {
            data: () => ({
              items: [
                {
                  name: "Home",
                  href: "/breadcrumbs",
                },
                {
                  name: "Children 1",
                  href: "/breadcrumbs/children1",
                },
                {
                  name: "Children 2",
                  href: "/breadcrumbs/children1/children2",
                  active: true,
                },
              ],
            }),
            components: {
              HwBreadcrumbs,
            },
          };
          &lt;/script&gt;
        </code>
          </pre>
        </template>
        <template #component>
          <hw-breadcrumbs :items="items" :dynamic="true" divider="!">
        <template v-slot:prepend> 🎈 </template>
      </hw-breadcrumbs>
      <router-view></router-view>
        </template>
      </use-view>
     
      <p>Router configuration for dynamic routing(router.js)</p>
      <div class="card-pre">
        <pre>
      <code class="language-html">
        {
      path: '/breadcrumbs',
      name: 'breadcrumbs',
      component: () => import('../views/breadcrumbs/Breadcrumbs.vue'),
      children: [
        {
          path: '',
          component:  () => import('../views/breadcrumbs/Home.vue'),
          meta: {
            breadcrumb: [
              { name: 'Home' }
            ]
          },
        },
        {
          path: 'children1',
          component:  () => import('../views/breadcrumbs/Children1.vue'),
          meta: {
            breadcrumb: [
              {
                name: "Home",
                href: "/breadcrumbs",
              },
              {
                name: "Children 1",
              },
            ]
          },
        },
        {
          path: 'children1/children2',
          component:  () => import('../views/breadcrumbs/Children2.vue'),
          meta: {
            breadcrumb: [
              {
                name: "Home",
                href: "/breadcrumbs",
              },
              {
                name: "Children 1",
                href: "/breadcrumbs/children1",
                
              },
              {
                name: "Children 2",
              },
            ]
          },
        },
      ],
    } 
    
      </code>
   </pre>
      </div>
    </div>
  </div>
</template>
<script>
import HwBreadcrumbs from "@lib/breadcrumbs/HwBreadcrumbs.vue";
import UseView from "../../components/utils/UseView.vue";
export default {
  data: () => ({
    items: [
      {
        name: "Home",
        href: "/breadcrumbs",
      },
      {
        name: "Children 1",
        href: "/breadcrumbs/children1",
      },
      {
        name: "Children 2",
        href: "/breadcrumbs/children1/children2",
        active: true,
      },
    ],
  }),

  components: {
    HwBreadcrumbs,
    UseView,
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  font-size: palette-font-size-level(14);
  margin-bottom: 20px;
}

.card {
  border: 1px solid palette-color-level(grey, 10);
  border-radius: palette-radius-level(3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: palette-color-level(white, 100);

  .card-text {
    padding: 8px;
  }
}

.card-body {
  padding: 20px;
}

.card-list {
  list-style-type: square;
  margin: 10px;
  padding: 1px 0 2px 25px;
}

.card-pre {
  margin-bottom: 20px;

  pre {
    line-height: 1.2;
    background-color: palette-color-level(primary-dark, 100);
    border-radius: palette-radius-level(3);
    white-space: pre-wrap;
    overflow: auto;
    color: palette-color-level(primary-light, 100);
  }

  code {
    display: inline;
    padding: 0;
    margin: 0;
    overflow: visible;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }
}

h2 {
  font-size: palette-font-size-level(9);
  margin: 0;
}

table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  background-color: palette-color-level(white, 100);
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid palette-color-level(grey, 60);
}

th {
  background-color: palette-color-level(grey, 80);
  font-weight: palette-font-weight-level(5);
}

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

  >div {
    padding: palette-space-level(15) palette-space-level(20);
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

    .option {
      display: flex;

      &:hover {
        .option-value {
          border-color: palette-color-level(white, 100);
          border-width: palette-space-level(4);
        }
      }

      &-value {
        padding-right: palette-space-level(10);
        border-right: 1px solid palette-color-level(primary-alt, 100);
        transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25);
      }

      &-text {
        padding-left: palette-space-level(10);
      }
    }
  }
}
</style>