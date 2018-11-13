<template>
    <div class="card_box boxs_bottom">
        <div class="row">
            <div class="col-12">
                <div class="card_body">
                    <div class="table-responsive">
                        <table class="styler_table">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Lab Value</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Comments</th>
                                <th>Actions</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>

                            <!-- laboratoryData: [
                                {
                                    date: "03/12/2016",
                                    labValue: 40,
                                    day: 3,
                                    time: "11:30 am",
                                    comments: "Very Low",
                                    editflag: false
                                }, -->

                            <tr v-bind:class="[laboratoryData[0].editflag? 'edit_perform':'']">
                                <td>
                                    <div v-if="!laboratoryData[0].editflag" v-bind:style="[ laboratoryData[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[0].date}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].date" v-model="editData1[0].date"/>
                                </td>
                                <td >
                                    <div v-if="!laboratoryData[0].editflag" v-bind:style="[ laboratoryData[0].highlightflag?{'color':'lightgrey'}:{'color':'cornflowerblue'}]">
                                        {{laboratoryData[0].labValue}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].labValue" v-model="editData1[0].labValue"/>
                                <td>
                                    <div v-if="!laboratoryData[0].editflag" v-bind:style="[ laboratoryData[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[0].day}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].day" v-model="editData1[0].day"/>
                                </td>
                                <td>
                                    <div v-if="!laboratoryData[0].editflag" v-bind:style="[ laboratoryData[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[0].time}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].time" v-model="editData1[0].time"/>
                                </td>
                                <td>
                                    <div v-if="!laboratoryData[0].editflag" v-bind:style="[ laboratoryData[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[0].comments}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].comments" v-model="editData1[0].comments"/>
                                </td>
                                <td><a href="javascript:;" class="success" v-on:click="changeEditFlag(editData1[0],0)"><img src="assets/images/icons/edit_pen.png" alt="">{{!laboratoryData[0].editflag? "Edit":"Save"}}</a></td>
                                <td>
                                    <a href="javascript:;" class="success perform_tbl_delete" v-if="!laboratoryData[0].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                    <a href="javascript:;" class="success" v-else @click="cancelEdit(laboratoryData[0],0)"><img src="assets/images/icons/trash.png" alt="">Cancel</a>
                                </td>
                                <td class="delete_overlay" v-if="!laboratoryData[0].editflag">
                                    <ul>
                                        <li class="label">Are you sure? </li>
                                        <li class="action red"><a href="">Delete</a></li>
                                        <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr v-bind:class="[laboratoryData[1].editflag? 'edit_perform':'']">
                                <td>
                                    <div v-if="!laboratoryData[1].editflag" v-bind:style="[ laboratoryData[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[1].date}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].index" v-model="editData1[1].index"/>
                                </td>
                                <td>
                                    <div v-if="!laboratoryData[1].editflag" v-bind:style="[ laboratoryData[1].highlightflag?{'color':'lightgrey'}:{'color':'cornflowerblue'}]">
                                        {{laboratoryData[1].labValue}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].labValue" v-model="editData1[1].labValue"/>
                                <td>
                                    <div v-if="!laboratoryData[1].editflag" v-bind:style="[ laboratoryData[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[1].day}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].day" v-model="editData1[1].day"/>
                                </td>
                                <td>
                                    <div v-if="!laboratoryData[1].editflag" v-bind:style="[ laboratoryData[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[1].time}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].time" v-model="editData1[1].time"/>
                                </td>
                                <td>
                                    <div v-if="!laboratoryData[1].editflag" v-bind:style="[ laboratoryData[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[1].comments}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].comments" v-model="editData1[1].comments"/>
                                </td>
                                <td><a href="javascript:;" class="success" v-on:click="changeEditFlag(editData1[1],1)"><img src="assets/images/icons/edit_pen.png" alt="">{{!laboratoryData[1].editflag? "Edit":"Save"}}</a></td>
                                <td>
                                    <a href="javascript:;" class="success perform_tbl_delete" v-if="!laboratoryData[1].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                    <a href="javascript:;" class="success" v-else @click="cancelEdit(laboratoryData[1],1)"><img src="assets/images/icons/trash.png" alt="">Cancel</a>
                                </td>
                                <td class="delete_overlay" v-if="!laboratoryData[1].editflag">
                                    <ul>
                                        <li class="label">Are you sure? </li>
                                        <li class="action red"><a href="">Delete</a></li>
                                        <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr v-bind:class="[laboratoryData[2].editflag? 'edit_perform':'']">
                                <td>
                                    <div v-if="!laboratoryData[2].editflag" v-bind:style="[ laboratoryData[2].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[2].date}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].date" v-model="editData1[2].date"/>
                                </td>
                                <td >
                                    <div v-if="!laboratoryData[2].editflag" v-bind:style="[ laboratoryData[2].highlightflag?{'color':'lightgrey'}:{'color':'cornflowerblue'}]">
                                        {{laboratoryData[2].labValue}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].labValue" v-model="editData1[2].labValue"/>
                                <td>
                                    <div v-if="!laboratoryData[2].editflag" v-bind:style="[ laboratoryData[2].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[2].day}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].day" v-model="editData1[2].day"/>
                                </td>
                                <td>
                                    <div v-if="!laboratoryData[2].editflag" v-bind:style="[ laboratoryData[2].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[2].time}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].time" v-model="editData1[2].time"/>
                                </td>
                                <td>
                                    <div v-if="!laboratoryData[2].editflag" v-bind:style="[ laboratoryData[2].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[2].comments}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].comments" v-model="editData1[2].comments"/>
                                </td>
                                <td><a href="javascript:;" class="success" v-on:click="changeEditFlag(editData1[2],2)"><img src="assets/images/icons/edit_pen.png" alt="">{{!laboratoryData[2].editflag? "Edit":"Save"}}</a></td>
                                <td>
                                    <a href="javascript:;" class="success perform_tbl_delete" v-if="!laboratoryData[2].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                    <a href="javascript:;" class="success" v-else @click="cancelEdit(laboratoryData[2],2)"><img src="assets/images/icons/trash.png" alt="">Cancel</a>
                                </td>
                                <td class="delete_overlay" v-if="!laboratoryData[2].editflag">
                                    <ul>
                                        <li class="label">Are you sure? </li>
                                        <li class="action red"><a href="">Delete</a></li>
                                        <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr v-bind:class="[laboratoryData[3].editflag? 'edit_perform':'']">
                                <td>
                                    <div v-if="!laboratoryData[3].editflag" v-bind:style="[ laboratoryData[3].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[3].date}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[3].date" v-model="editData1[3].date"/>
                                </td>
                                <td >
                                    <div v-if="!laboratoryData[3].editflag" v-bind:style="[ laboratoryData[3].highlightflag?{'color':'lightgrey'}:{'color':'cornflowerblue'}]">
                                        {{laboratoryData[3].labValue}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[3].labValue" v-model="editData1[3].labValue"/>
                                <td>
                                    <div v-if="!laboratoryData[3].editflag" v-bind:style="[ laboratoryData[3].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[3].day}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[3].day" v-model="editData1[3].day"/>
                                </td>
                                <td>
                                    <div v-if="!laboratoryData[3].editflag" v-bind:style="[ laboratoryData[3].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[3].time}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[3].time" v-model="editData1[3].time"/>
                                </td>
                                <td>
                                    <div v-if="!laboratoryData[3].editflag" v-bind:style="[ laboratoryData[3].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{laboratoryData[3].comments}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[3].comments" v-model="editData1[3].comments"/>
                                </td>
                               <td><a href="javascript:;" class="success" v-on:click="changeEditFlag(editData1[3],3)"><img src="assets/images/icons/edit_pen.png" alt="">{{!laboratoryData[3].editflag? "Edit":"Save"}}</a></td>
                                <td>
                                    <a href="javascript:;" class="success perform_tbl_delete" v-if="!laboratoryData[3].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                    <a href="javascript:;" class="success" v-else @click="cancelEdit(laboratoryData[3],3)"><img src="assets/images/icons/trash.png" alt="">Cancel</a>
                                </td>
                                <td class="delete_overlay" v-if="!laboratoryData[3].editflag">
                                    <ul>
                                        <li class="label">Are you sure? </li>
                                        <li class="action red"><a href="">Delete</a></li>
                                        <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="pad_footer">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <p><img src="assets/images/icons/know_more.png" alt="">Want to know more about this patient’s Lab Interpretation?  <a href="javascript:;" class="success">Click Here</a></p>
                        </div>
                    </div>
                    <p><small>Suggested by CliniRex AI</small></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    const ttt = [
      {
        date: "03/12/2016",
        labValue: 40,
        day: 3,
        time: "11:30 am",
        comments: "Very Low",
        editflag: false,
        highlightflag: false
      },
      {
        date: "03/12/2016",
        labValue: 40,
        day: 3,
        time: "11:30 am",
        comments: "Very Low",
        editflag: false,
        highlightflag: false
      },
      {
        date: "03/12/2016",
        labValue: 40,
        day: 3,
        time: "11:30 am",
        comments: "Very Low",
        editflag: false,
        highlightflag: false
      },
      {
        date: "03/12/2016",
        labValue: 40,
        day: 3,
        time: "11:30 am",
        comments: "Very Low",
        editflag: false,
        highlightflag: false
      }
    ];
    return {
      laboratoryData: ttt,
      editData1: [
        {
          date: "03/12/2016",
          labValue: 40,
          day: 3,
          time: "11:30 am",
          comments: "Very Low",
          editflag: false,
          highlightflag: false
        },
        {
          date: "03/12/2016",
          labValue: 40,
          day: 3,
          time: "11:30 am",
          comments: "Very Low",
          editflag: false,
          highlightflag: false
        },
        {
          date: "03/12/2016",
          labValue: 40,
          day: 3,
          time: "11:30 am",
          comments: "Very Low",
          editflag: false,
          highlightflag: false
        },
        {
          date: "03/12/2016",
          labValue: 40,
          day: 3,
          time: "11:30 am",
          comments: "Very Low",
          editflag: false,
          highlightflag: false
        }
      ]
    };
  },
  methods: {
    changeEditFlag(data, _index) {
      this.laboratoryData[_index].editflag = !this.laboratoryData[_index]
        .editflag;

      if (this.laboratoryData[_index].editflag) {
        this.laboratoryData.forEach((cur, key) => {
          this.laboratoryData[key].highlightflag =
            key === _index ? false : true;
        });
      } else {
        this.laboratoryData.forEach((cur, key) => {
          this.laboratoryData[key].highlightflag = false;
        });
        this.laboratoryData[_index] = Object.assign({}, data);
      }
    },
    cancelEdit(data, _index) {
      this.laboratoryData[_index].editflag = false;
      this.laboratoryData.forEach((cur, key) => {
        this.laboratoryData[key].highlightflag = false;
      });
      this.editData1[_index] = Object.assign({}, data);
      const editData123 = this.editData1;
      this.editData1 = Object.assign({}, editData123);
    }
  }
};
</script>
