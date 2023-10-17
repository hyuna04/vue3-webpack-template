<template>
  <h1>{{ message }}</h1>
  <HelloWorld />
</template>

<script>
import HelloWorld from "~/components/HelloWorld";
//./components/HelloWorld.vue->'.components/HelloWorld.vue의 vue확장자 생략'
//./components/HelloWorld.vue->./를 webpack에서 작성한 경로별칭을 통해 ~/로 변경

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: "Hello Vue!!!",
    };
  },
};
</script>