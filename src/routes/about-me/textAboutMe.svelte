<script>
	import OrangeBox from "../../lib/orangeBox.svelte";
  import SegmentTitle from "../../lib/segmentTitle.svelte";
  import { _ } from "svelte-i18n"

</script>


<div class="mx-5 mt-4">
  <SegmentTitle box={$_("about.box")} title={"Lev Lekush"}/>
  <div>
    <div class="my-4">
      {$_("about.name")}
  </div>
  <!-- Tech Skills -->
  <div class="mb-4">
      <span>{$_("about.experience.year")}</span>
      <ul class="list-disc pl-5">
          <li>{$_("about.experience.ios")}</li>
          <li>{$_("about.experience.api")}</li>
          <li>{$_("about.experience.web")}</li>
          <li>{$_("about.experience.aws")}</li>
      </ul>
  </div>
  
  <!-- Design Skills -->
  <div class="mb-4">
      <span >{$_("about.ui/ux")}</span>
  </div>
  
  <!-- Education -->
  <div class="mb-4">
      <span>{$_("about.uni")}</span>
  </div>
  
  <!-- Personal Motto -->
  <div class="mb-4">
      <span class="font-semibold">{$_("about.motivation")}</span>
  </div>
  </div>

</div>
