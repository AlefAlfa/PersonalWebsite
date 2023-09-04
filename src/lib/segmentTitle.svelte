<script>
  import OrangeBox from "./orangeBox.svelte";
  export let box
  export let title
</script>

<OrangeBox text={box} />
  <div class="font-bold flex text-xl sm:text-3xl mt-4">
    <h1>{title}</h1>
  </div>