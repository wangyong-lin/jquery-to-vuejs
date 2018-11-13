<template>
    <div class="content">
        <MenuLeft/>
        <right-slider/>
        <main-content/>
    </div>
</template>

<script>
import MenuLeft from "./MenuLeft.vue";
import RightSlider from "./RightSlider.vue";
import MainContent from "./MainContent.vue";

export default {
  components: {
    MenuLeft,
    RightSlider,
    MainContent
  }
};
</script>
