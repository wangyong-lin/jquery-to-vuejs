<template>
    <div>
        <div class="card_box boxs_bottom">
            <div class="row super_adder ">
                <div class="col-md-12">
                    <div class="search_tag_box">
                        <div style="margin-top: -10px; padding-bottom: 10px;">
                            <i class="fas fa-search search_lable"></i>
                            <a-select
                            mode="multiple"
                            style="width: 70%;
                                    padding-top: 20px;
                                    padding-left: 50px;"
                            @change="handleChange"
                            placeholder="Please select">
                                <a-select-option v-for="item in lab" :key="item.medicineName">{{ item.medicineName }}</a-select-option>
                            </a-select>
                            <!-- <a href="javascript:;" class="add_all_btn btn btn-success btn-small">Add All</a> -->
                        </div>
                    </div>
                </div>
                <div class="super_adder_table" >
                    <div class="col-md-12">
                        <div class="card_body py-0">
                            <div class="table-responsive">
                                <table class="styler_table" style="overflow: auto">
                                    <thead>
                                    <tr>
                                        <th>S. No</th>
                                        <th>Name of test</th>
                                        <th>Category</th>
                                        <th>Date of Test</th>
                                        <th>Time</th>
                                        <th>Result</th>
                                        <th>Comments</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in searchResult" >
                                            <td v-for="key in item">{{key}}</td>                                            
                                            <td><a href="javascript:;" class="success perform_tbl2_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="save_btn_box">
                            <a href="javascript:;" class="btn btn-success save_all_btn btn-small">Save & Exit</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="labortart_part_s">
            <labortart-part-s1/>
            <labortart-part-s2/>
        </div>
    </div>
</template>

<script>
import LabortartPartS1 from "./LabortartPartS1.vue";
import LabortartPartS2 from "./LabortartPartS2.vue";

// v-bind:style="[(searchResult.length!=0||searchResult===null)?{'display':undefined}:{'display':'none'}]">
                    

export default {
  components: {
    LabortartPartS1,
    LabortartPartS2
  },
  data: () => ({
    lab: [
      {
        index: 1,
        medicineName: "Aspirin",
        category: "Liquid Profile",
        dateOfTest: "30 Jun 2018",
        time: "1:30 am",
        result: "+ve",
        comments: "He is Light"
      },
      {
        index: 2,
        medicineName: "Warfarin",
        category: "Liquid Profile",
        dateOfTest: "30 Jun 2018",
        time: "1:30 am",
        result: "+ve",
        comments: "He is Light"
      },
      {
        index: 3,
        medicineName: "Pantoprozole + Domperidone",
        category: "Liquid Profile",
        dateOfTest: "30 Jun 2018",
        time: "1:30 am",
        result: "+ve",
        comments: "He is Light"
      }
    ],
    searchResult: []
  }),
  methods: {
    handleChange(value) {
      this.searchResult = [];
      for (let key in value) {
        const result = this.lab.filter(item => {
          return item.medicineName === value[key];
        });
        this.searchResult.push(result[0]);
      }
    }
  }
};
</script>
