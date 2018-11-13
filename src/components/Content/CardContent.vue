<template>
    <div>

        <div class="card mb-4">

          <div class="card_box">
                <div class="card_box boxs_bottom">
                    <ul class="list-group tabe_menu dots_menu" id="list-tab" role="tablist">
                        <li class="tab_li"><a class="list-group-item list-group-item-action " id="tabi_1" data-toggle="list" href="#tab1" role="tab">Basic Information</a></li>
                        <li class="tab_li"><a class="list-group-item list-group-item-action" id="tabi_2" data-toggle="list" href="#tab2" role="tab">Medical History</a></li>
                        <li class="tab_li"><a class="list-group-item list-group-item-action" id="tabi_3" data-toggle="list" href="#tab3" role="tab">Diagnosis</a></li>
                        <li class="tab_li"><a class="list-group-item list-group-item-action" id="tabi_4" data-toggle="list" href="#tab4" role="tab">Laboratory  Investigation</a></li>
                        <li class="tab_li"><a class="list-group-item list-group-item-action " id="tabi_5" data-toggle="list" href="#tab5" role="tab">Prescription</a></li>
                        <li class="tab_li flt_right_mernu">
                            <a href="#tab7" class="list-group-item list-group-item-action icon_with " id="tabi_7"  data-toggle="list" role="tab"><img src="assets/images/icons/dailybook.png" alt=""><span class="txt">Daily Notes</span></a>
                        </li>
                        <li class="tab_li flt_right_mernu">
                            <a href="#tab6" class="list-group-item list-group-item-action icon_with active" id="tabi_6"  data-toggle="list" role="tab"><img src="assets/images/icons/discharge.png" alt=""><span class="txt">Discharge</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="tab-content">

                        <div class="tab-pane fade" id="tab1">
                            <basic-information/>
                        </div>

                        <div class="tab-pane fade" id="tab2">
                            <MedicalHistory/>
                        </div>

                        <div class="tab-pane fade" id="tab3">
                            <Diagnosis/>
                        </div>

                        <div class="tab-pane fade" id="tab4">
                            <LaboratoryInvestgration/>
                        </div>

                        <div class="tab-pane fade" id="tab5">
                            <Prescription/>
                        </div>


                        <div class="tab-pane active" id="tab6">
                            <DailyNotes/>
                        </div>

                        <div class="tab-pane fade" id="tab7">
                            <Discharge/>
                        </div>

                    </div>

        </div>

    </div>
</template>

<script>
import BasicInformation from "./ContentTab/BasicInformation.vue";
import MedicalHistory from "./ContentTab/MedicalHistory.vue";
import Diagnosis from "./ContentTab/Diagnosis.vue";
import LaboratoryInvestgration from "./ContentTab/LaboratoryInvestgration.vue";
import Prescription from "./ContentTab/Prescription.vue";
import DailyNotes from "./ContentTab/DailyNotes.vue";
import Discharge from "./ContentTab/Discharge.vue";

export default {
  components: {
    BasicInformation,
    MedicalHistory,
    Diagnosis,
    LaboratoryInvestgration,
    Prescription,
    DailyNotes,
    Discharge
  }
};
</script>

<style>
</style>
