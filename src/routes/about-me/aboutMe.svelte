<script>
import TextAboutMe from "./textAboutMe.svelte";

let innerWidth
</script>

<svelte:window bind:innerWidth={innerWidth}/>

<div id="about" class="flex justify-center">
  <div>
    {#if innerWidth > 835}
    <div class="flex justify-center">
        <div class="flex">
          <img class="w-[333px] m-14 object-contain" src="/images/aboutme.png" alt="">
          <div>
            <TextAboutMe/>
          </div>
        </div>
      </div>
      {:else}
    
        <div class="flex flex-col">
          <div class="flex justify-center mb-8">
            <img class="w-2/3 mx-5 max-w-xs object-contain" src="/images/aboutme.png" alt="">
          </div>
          <div class="flex justify-center">
            <TextAboutMe/>
          </div>
        </div>
      {/if}
  </div>  

</div>
