import{html}from"./polymer_bundled.min.js";const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);styleMod.register("cr-hidden-style");