<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>👀</span>Overview</h2>
        <p class="card-text">This project is actually a part of a vue3 component library project that is under development
          right now. ag-dialog is a custom component that takes advantage of many features of Vue3.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>🔫</span>Getting Started</h2>
        <p class="card-text">For ag-dialog there are some props and their default values are avaliable. You can see the
          other values on props table. See the code example below:</p>
      </div>
    </div>
    <div class="card-pre">
      <pre>
        <code class="language-html"> 
          &lt;HwDialog 
          @open="openEvent" @close="closeEvent" position="center" size="md" :backdrop="false" :animation="true"
          &gt; 
          &lt;/HwDialog&gt; 
        </code>
     </pre>
    </div>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>💣</span>Features</h2>
        <ul class="card-list">
          <li>Header, body and footer contents supported customization by slots</li>
          <li>Dialog on hover displays a scroller when content exceeds viewport</li>
          <li>Open and close animations</li>
          <li>Optional animation display</li>
          <li>Backdrop opacity and elevated design</li>
          <li>Positioning options</li>
          <li>Size options</li>
          <li>Open and close methods and events</li>
          <li>No close on backdrop click option</li>
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
          <th>Options</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>position</td>
          <td>String</td>
          <td>center</td>
          <td>center, top, right, bottom, left</td>
          <td>Position options for modal component</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>md</td>
          <td>xs, sm, md, lg, xl</td>
          <td>Size options for modal component</td>

        </tr>
        <tr>
          <td>backdrop</td>
          <td>Boolean</td>
          <td>false</td>
          <td>true, false</td>
          <td>Backdrop flag for closing modal when outside click</td>
        </tr>
        <tr>
          <td>animation</td>
          <td>Boolean</td>
          <td>true</td>
          <td>true, false</td>
          <td>Animation flag for modal openning and closing</td>
        </tr>

      </tbody>
    </table>

    <h2 class="card-title"><span>🌱</span>Events</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Events</th>
          <th>Type</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Open</td>
          <td>Click</td>
          <td>Open Event Triggered!</td>
        </tr>
        <tr>
          <td>Close</td>
          <td>Click</td>
          <td>Close Event Triggered!</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: palette-space-level(1000);
  margin: 0 auto;
  padding: palette-space-level(20);
}

h1 {
  font-size: palette-font-size-level(14);
  margin-bottom: palette-space-level(20);
}

.card {
  border: 1px solid palette-color-level(grey, 10);
  border-radius: palette-radius-level(3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: palette-space-level(20);
  background-color: palette-color-level(white, 100);
  ;

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
}</style>