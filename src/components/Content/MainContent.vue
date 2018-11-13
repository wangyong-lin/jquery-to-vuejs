<template>
    <div class="main_content">

        <div class="row">
            <div class="col-12">
                <div class="page_title center">
                    <h5>
                        <a href="javascript:;" class="go_back"><i class="fas fa-angle-left"></i><span class="txt">Dashboard</span></a>
                        <div class="img_hold">
                            <img src="assets/images/icons/syllabus.png" alt="">
                        </div>
                        <span class="title">Patient Profile</span>
                        <div class="right_actions">
                            <a href="javascript:;" class="btn"><span class="txt">Continue</span></a>
                            <a href="javascript:;" class="cancel">Discard</a>
                        </div>
                    </h5>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <CardContent/>
            </div>
        </div>

    </div>
</template>

<script>
import CardContent from "./CardContent.vue";

export default {
  components: {
    CardContent
  }
};
</script>

