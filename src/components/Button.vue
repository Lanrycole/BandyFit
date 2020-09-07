<template>
  <div>
    <Button>{{ btnText }}</Button>
  </div>
</template>

<script>
export default {
  props: ['btnText']
}
</script>

<style lang="scss">
$priColor: #161819;
$secColor: #ffffff;
$accColor: #b98f09;
$colorFill: #0e010a;


Button {
  transform: scale(1.04);
  padding: 18px;
  color: $priColor;
  font-size: 16px;
width: 20%;
 border: 1px solid $colorFill;
  &:hover {
    background: $accColor;
    transform: scale(2);
  }
}
</style>