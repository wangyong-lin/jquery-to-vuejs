<template>
   <div class="card_box boxs_bottom">
        <div class="card_body">
            <div class="label_head">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <p class="simple_with_icon">
                            <span class="green_circle_icon chked icon_w"></span>
                            <span class="txt success">Past Medical History</span>
                        </p>
                    </div>
                    <div class="col-md-6 col-12">
                        <a href="javascript:;" class="label_head_link">Add New</a>
                    </div>
                </div>
            </div>
            <div class="label_body">

                <div class="table_box_rows">
                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>Disease/Condition</th>
                                <th>Duration</th>
                                <th>On Regular Medication</th>
                                <th>Medication</th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input placeholder="Disease condition goes here" type="text" class="form-control td_style_input"></td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">Select Days</option>
                                            <option value="months">0</option>
                                            <option value="months">1</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:100px;">
                                        <select class="">
                                            <option value="years">No</option>
                                            <option value="months">Yes</option>
                                        </select>
                                    </div>
                                </td>
                                <td class="manange_green_icon" style="width: 200px"><span class="txt">Your Medicine </span><span class="green_circle_icon"></span></td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></div>
                                        <div class="action_td"><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <div class="delete_overlay">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Disease/Condition</th>
                                <th>Duration</th>
                                <th>On Regular Medication</th>
                                <th>Medication</th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                
                            <tr v-bind:class="[medicalhistory[0].editflag? 'edit_perform':'']">
                                <td>{{medicalhistory[0].index}}</td>

                                <td>
                                    <div v-if="!medicalhistory[0].editflag" v-bind:style="[ medicalhistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{medicalhistory[0].disease}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].disease" v-model="editData1[0].disease"/>
                                </td>
                                <td>
                                    <div v-if="!medicalhistory[0].editflag" v-bind:style="[ medicalhistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{medicalhistory[0].duration}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].duration" v-model="editData1[0].duration"/>
                                </td>
                                <td class="text-center">
                                    <div v-if="!medicalhistory[0].editflag" v-bind:style="[ medicalhistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{medicalhistory[0].regularMedication?"Yes":"No"}}
                                    </div>
                                    <input v-else type="checkbox" v-bind:defaultValue="editData1[0].regularMedication" v-model="medicalhistory[0].regularMedication"/>
                                <td>
                                     <div v-if="!medicalhistory[0].editflag" v-bind:style="[ medicalhistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{medicalhistory[0].medication}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].medication" v-model="editData1[0].medication"/>
                                </td>

                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success" v-on:click="changeEditFlag(editData1[0], 0,'MedicalHistory')"><img src="assets/images/icons/edit_pen.png" alt="">{{!medicalhistory[0].editflag?"Edit":"Save"}}</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="success perform_tbl_delete" v-if="!medicalhistory[0].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <a href="javascript:;" class="success" v-else @click="cancelEdit(medicalhistory[0],0,'MedicalHistory')"><img src="assets/images/icons/trash.png" alt="">Cancel</a>
                                            <div class="delete_overlay" v-if="!medicalhistory[0].editflag">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            <tr v-bind:class="[medicalhistory[1].editflag? 'edit_perform':'']">
                                <td>{{medicalhistory[1].index}}</td>

                                <td>
                                    <div v-if="!medicalhistory[1].editflag" v-bind:style="[ medicalhistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{medicalhistory[1].disease}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].disease" v-model="editData1[1].disease"/>
                                </td>
                                <td>
                                    <div v-if="!medicalhistory[1].editflag" v-bind:style="[ medicalhistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{medicalhistory[1].duration}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].duration" v-model="editData1[1].duration"/>
                                </td>
                                <td class="text-center">
                                    <div v-if="!medicalhistory[1].editflag" v-bind:style="[ medicalhistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{medicalhistory[1].regularMedication?"Yes":"No"}}
                                    </div>
                                    <input v-else type="checkbox" v-bind:defaultValue="editData1[1].regularMedication" v-model="medicalhistory[1].regularMedication"/>
                                <td>
                                     <div v-if="!medicalhistory[1].editflag" v-bind:style="[ medicalhistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{medicalhistory[1].medication}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].medication" v-model="editData1[1].medication"/>
                                </td>

                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success" v-on:click="changeEditFlag(editData1[1], 1,'MedicalHistory')"><img src="assets/images/icons/edit_pen.png" alt="">{{!medicalhistory[1].editflag?"Edit":"Save"}}</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="success perform_tbl_delete" v-if="!medicalhistory[1].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <a href="javascript:;" class="success" v-else @click="cancelEdit(medicalhistory[1],1,'MedicalHistory')"><img src="assets/images/icons/trash.png" alt="">Cancel</a>
                                            <div class="delete_overlay" v-if="!medicalhistory[1].editflag">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="table_box_rows">

                    <p class="orange table_box_title">Surgical History</p>

                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>Name of the Surgery</th>
                                <th>Date Underwent</th>
                                <th>Medication</th>
                                <th>Surgical Notes</th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input placeholder="Enter your surgery here" type="text" class="form-control td_style_input"></td>
                                <td>
                                    <div class="with_icon_input table_type">
                                        <i class="fas fa-calendar-alt"></i>
                                        <input required="" placeholder="Select Date" class="datepicker_2 form-control" type="text">
                                    </div>
                                </td>
                                <td><input placeholder="Enter your medication here" type="text" class="form-control td_style_input"></td>
                                <td><input placeholder="Enter your medication here" type="text" class="form-control td_style_input"></td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></div>
                                        <div class="action_td"><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <div class="delete_overlay">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>


                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Name of the Surgery</th>
                                <th>Date Taken</th>
                                <th>Medication</th>
                                <th>Surgical Notes</th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr v-bind:class="[surgicalHistory[0].editflag? 'edit_perform':'']">
                                <td>{{surgicalHistory[0].index}}</td>
                                <td>
                                    <div v-if="!surgicalHistory[0].editflag" v-bind:style="[ surgicalHistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[0].surgeryName}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData2[0].surgeryName" v-model="editData2[0].surgeryName"/>
                                </td>
                                <td>
                                    <div v-if="!surgicalHistory[0].editflag" v-bind:style="[ surgicalHistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[0].dateTaken}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData2[0].dateTaken" v-model="editData2[0].dateTaken"/>
                                </td>
                                <td>
                                    <div v-if="!surgicalHistory[0].editflag" v-bind:style="[ surgicalHistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[0].medication}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData2[0].medication" v-model="editData2[0].medication"/>
                                </td>
                                <td>
                                    <div v-if="!surgicalHistory[0].editflag" v-bind:style="[ surgicalHistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[0].surgicalNotes}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData2[0].surgicalNotes" v-model="editData2[0].surgicalNotes"/>
                                </td>

                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success" v-on:click="changeEditFlag(editData2[0], 0,'SurgicalHistory')"><img src="assets/images/icons/edit_pen.png" alt="">{{!surgicalHistory[0].editflag?"Edit":"Save"}}</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="success perform_tbl_delete" v-if="!surgicalHistory[0].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <a href="javascript:;" class="success" v-else @click="cancelEdit(surgicalHistory[0],0,'SurgicalHistory')"><img src="assets/images/icons/trash.png" alt="">Cancel</a>
                                            <div class="delete_overlay" v-if="!surgicalHistory[0].editflag">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            <tr v-bind:class="[surgicalHistory[1].editflag? 'edit_perform':'']">
                                <td>{{surgicalHistory[1].index}}</td>
                                <!-- <td>
                                    <div v-if="!surgicalHistory[1].editflag" v-bind:style="[ surgicalHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[1].surgeryName}}
                                    </div>
                                    <a-input v-else placeholder="default size" v-model="surgicalHistory[1].surgeryName"/>
                                </td>
                                <td>
                                    <div v-if="!surgicalHistory[1].editflag" v-bind:style="[ surgicalHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[1].dateTaken}}
                                    </div>
                                    <a-input v-else placeholder="default size" v-model="surgicalHistory[1].dateTaken"/>
                                </td>
                                <td>
                                    <div v-if="!surgicalHistory[1].editflag" v-bind:style="[ surgicalHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[1].medication}}
                                    </div>
                                    <a-input v-else placeholder="default size" v-model="surgicalHistory[1].medication"/>
                                </td>
                                <td>
                                    <div v-if="!surgicalHistory[1].editflag" v-bind:style="[ surgicalHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[1].surgicalNotes}}
                                    </div>
                                    <a-input v-else placeholder="default size" v-model="surgicalHistory[1].surgicalNotes"/>
                                </td>

                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success" v-on:click="changeEditFlag(1,'SurgicalHistory')"><img src="assets/images/icons/edit_pen.png" alt="">{{!surgicalHistory[1].editflag?"Edit":"Save"}}</a></div>
                                        <div class="action_td"><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <div class="delete_overlay">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td> -->

                                <td>
                                    <div v-if="!surgicalHistory[1].editflag" v-bind:style="[ surgicalHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[1].surgeryName}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData2[1].surgeryName" v-model="editData2[1].surgeryName"/>
                                </td>
                                <td>
                                    <div v-if="!surgicalHistory[1].editflag" v-bind:style="[ surgicalHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[1].dateTaken}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData2[1].dateTaken" v-model="editData2[1].dateTaken"/>
                                </td>
                                <td>
                                    <div v-if="!surgicalHistory[1].editflag" v-bind:style="[ surgicalHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[1].medication}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData2[1].medication" v-model="editData2[1].medication"/>
                                </td>
                                <td>
                                    <div v-if="!surgicalHistory[1].editflag" v-bind:style="[ surgicalHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{surgicalHistory[1].surgicalNotes}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData2[1].surgicalNotes" v-model="editData2[1].surgicalNotes"/>
                                </td>

                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success" v-on:click="changeEditFlag(editData2[1], 1,'SurgicalHistory')"><img src="assets/images/icons/edit_pen.png" alt="">{{!surgicalHistory[1].editflag?"Edit":"Save"}}</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="success perform_tbl_delete" v-if="!surgicalHistory[1].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <a href="javascript:;" class="success" v-else @click="cancelEdit(surgicalHistory[1],1,'SurgicalHistory')"><img src="assets/images/icons/trash.png" alt="">Cancel</a>
                                            <div class="delete_overlay" v-if="!surgicalHistory[1].editflag">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="table_box_rows">

                    <p class="blue table_box_title">Immunization History</p>

                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>Name of the Vaccine</th>
                                <th>Date Taken</th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input placeholder="Enter your vaccine name here" type="text" class="form-control td_style_input"></td>
                                <td>
                                    <div class="with_icon_input table_type">
                                        <i class="fas fa-calendar-alt"></i>
                                        <input required="" placeholder="Select Date" class="datepicker_2 form-control" type="text">
                                    </div>
                                </td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></div>
                                        <div class="action_td"><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <div class="delete_overlay">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>


                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Name of the Vaccine</th>
                                <th>Date Taken</th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr v-bind:class="[immunizationHistory[0].editflag? 'edit_perform':'']">
                                <td>{{immunizationHistory[0].index}}</td>
                                <td>
                                    <div v-if="!immunizationHistory[0].editflag" v-bind:style="[ immunizationHistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{immunizationHistory[0].vaccineName}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData3[0].vaccineName" v-model="editData3[0].vaccineName"/>
                                </td>
                                <td>
                                    <div v-if="!immunizationHistory[0].editflag" v-bind:style="[ immunizationHistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{immunizationHistory[0].dataTaken}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData3[0].dataTaken" v-model="editData3[0].dataTaken"/>
                                </td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success" v-if="!immunizationHistory[0].editflag" ><img src="assets/images/icons/info.png" alt="">Info</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="success" v-on:click="changeEditFlag(editData3[0],0,'ImmunizationHistory')"><img src="assets/images/icons/edit_pen.png" alt="">{{!immunizationHistory[0].editflag?"Edit":"Save"}}</a>

                                        </div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="success perform_tbl_delete" v-if="!immunizationHistory[0].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <a href="javascript:;" class="success" v-else @click="cancelEdit(immunizationHistory[0],0,'ImmunizationHistory')"><img src="assets/images/icons/edit_pen.png" alt="">Cancel</a>
                                            <div class="delete_overlay" v-if="!immunizationHistory[0].editflag">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            <tr v-bind:class="[immunizationHistory[1].editflag? 'edit_perform':'']">
                                <td>{{immunizationHistory[1].index}}</td>
                                <td>
                                    <div v-if="!immunizationHistory[1].editflag" v-bind:style="[ immunizationHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{immunizationHistory[1].vaccineName}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData3[1].vaccineName" v-model="editData3[1].vaccineName"/>
                                </td>
                                <td>
                                    <div v-if="!immunizationHistory[1].editflag" v-bind:style="[ immunizationHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{immunizationHistory[1].dataTaken}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData3[1].dataTaken" v-model="editData3[1].dataTaken"/>
                                </td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success" v-if="!immunizationHistory[1].editflag" ><img src="assets/images/icons/info.png" alt="">Info</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="success" v-on:click="changeEditFlag(editData3[1],1,'ImmunizationHistory')"><img src="assets/images/icons/edit_pen.png" alt="">{{!immunizationHistory[1].editflag?"Edit":"Save"}}</a>

                                        </div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="success perform_tbl_delete" v-if="!immunizationHistory[1].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <a href="javascript:;" class="success" v-else @click="cancelEdit(immunizationHistory[1],1,'ImmunizationHistory')"><img src="assets/images/icons/edit_pen.png" alt="">Cancel</a>
                                            <div class="delete_overlay" v-if="!immunizationHistory[1].editflag">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="table_box_rows">

                    <p class="blue table_box_title">Family History</p>

                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>Disease/Condition</th>
                                <th>Relation</th>
                                <th>Duration</th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input placeholder="Disease condition goes here" type="text" class="form-control td_style_input"></td>
                                <td><input placeholder="Enter Relation" type="text" class="form-control td_style_input"></td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">Select Days</option>
                                            <option value="months">0</option>
                                            <option value="months">1</option>
                                        </select>
                                    </div>
                                </td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></div>
                                        <div class="action_td"><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <div class="delete_overlay">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Family History</th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr v-bind:class="[familyHistory[0].editflag? 'edit_perform':'']">
                                <td>{{familyHistory[0].index}}</td>
                                <td>
                                    <div v-if="!familyHistory[0].editflag" v-bind:style="[ familyHistory[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{familyHistory[0].familyHistory}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData4[0].familyHistory" v-model="editData4[0].familyHistory"/>
                                </td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success" v-on:click="changeEditFlag(editData4[0],0,'FamilyHistory')"><img src="assets/images/icons/edit_pen.png" alt="">{{!familyHistory[0].editflag?"Edit":"Save"}}</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="success perform_tbl_delete" v-if="!familyHistory[0].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <a href="javascript:;" class="success" v-else @click="cancelEdit(familyHistory[0],0,'FamilyHistory')"><img src="assets/images/icons/trash.png" alt="">Cancel</a>
                                            <div class="delete_overlay" v-if="!familyHistory[0].editflag">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            <tr v-bind:class="[familyHistory[1].editflag? 'edit_perform':'']">
                                <!-- <td>2</td>
                                <td>Father is suffering from fever since last 40 days.</td> -->

                                <td>{{familyHistory[1].index}}</td>
                                <td>
                                    <div v-if="!familyHistory[1].editflag" v-bind:style="[ familyHistory[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{familyHistory[1].familyHistory}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData4[1].familyHistory" v-model="editData4[1].familyHistory"/>
                                </td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success" v-on:click="changeEditFlag(editData4[1],1,'FamilyHistory')"><img src="assets/images/icons/edit_pen.png" alt="">{{!familyHistory[1].editflag?"Edit":"Save"}}</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="success perform_tbl_delete" v-if="!familyHistory[1].editflag"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <a href="javascript:;" class="success" v-else @click="cancelEdit(familyHistory[1],1,'FamilyHistory')"><img src="assets/images/icons/trash.png" alt="">Cancel</a>
                                            <div class="delete_overlay" v-if="!familyHistory[1].editflag">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="table_box_rows">

                    <p class="blue table_box_title">Social History</p>

                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>Smoking</th>
                                <th>Alcohal</th>
                                <th>Food Preferences</th>
                                <th>Martial Status</th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">No</option>
                                            <option value="months">Yes</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">No</option>
                                            <option value="months">Yes</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">Vegetarian</option>
                                            <option value="months">Non-Vegetarian</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">Un-Married</option>
                                            <option value="months">Married</option>
                                        </select>
                                    </div>
                                </td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></div>
                                        <div class="action_td"><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <div class="delete_overlay">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>Smoking</th>
                                <th>Alcohal</th>
                                <th>Food Preferences</th>
                                <th>Martial Status</th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">No</option>
                                            <option value="months">Yes</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">No</option>
                                            <option value="months">Yes</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">Vegetarian</option>
                                            <option value="months">Non-Vegetarian</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">Un-Married</option>
                                            <option value="months">Married</option>
                                        </select>
                                    </div>
                                </td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></div>
                                        <div class="action_td"><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <div class="delete_overlay">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="table_box_rows">

                    <p class="blue table_box_title">Materinity History</p>

                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>Number of Pregnencies</th>
                                <th>Number of Abortions</th>
                                <th>Number of Children Alive</th>
                                <th>Recent Delivery </th>
                                <th class="td_action_row">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">Number</option>
                                            <option value="months">1</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">Number</option>
                                            <option value="months">1</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:150px;">
                                        <select class="">
                                            <option value="years">Number</option>
                                            <option value="months">1</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="with_icon_input table_type">
                                        <i class="fas fa-calendar-alt"></i>
                                        <input required="" placeholder="Select Date" class="datepicker_2 form-control" type="text">
                                    </div>
                                </td>
                                <td class="td_action_row">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></div>
                                        <div class="action_td"><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                            <div class="delete_overlay">
                                                <ul>
                                                    <li class="label">Are you sure? </li>
                                                    <li class="action red"><a href="">Delete</a></li>
                                                    <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>

                </div>

                <div class="col-12">
                    <div class="pad_footer text-left pb-0 pt-5">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <p><img src="assets/images/icons/know_more.png" alt="">Wants to know more about Hairline Fracture?  <a href="javascript:;" class="success">Click Here</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <p><img src="assets/images/icons/know_more.png" alt="">Wants to know more about Polio Vaccine  <a href="javascript:;" class="success">Click Here</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <p><img src="assets/images/icons/know_more.png" alt="">Pack years <a href="javascript:;" class="success">1 Years</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <p><img src="assets/images/icons/know_more.png" alt="">Blood Alcohol Conent  <a href="javascript:;" class="success">0.8</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pad_footer pt-4">
                        <div class="col-12">
                            <p><small>Suggested by CliniRex AI</small></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    const ttt1 = [
      {
        index: 1,
        disease: "Hypertension",
        duration: "3 years 4 months",
        regularMedication: false,
        medication: "Furosemide",
        editflag: false,
        highlightflag: false
      },
      {
        index: 2,
        disease: "Hypertension",
        duration: "3 years 4 months",
        regularMedication: true,
        medication: "Furosemide",
        editflag: false,
        highlightflag: false
      }
    ];

    const ttt2 = [
      {
        index: 1,
        surgeryName: "Hypertension",
        dateTaken: "08 Jun 2017",
        medication: "Asprin,Warfarin",
        surgicalNotes: "The Patient was operated on......",
        editflag: false,
        highlightflag: false
      },
      {
        index: 2,
        surgeryName: "Hypertension",
        dateTaken: "08 Jun 2017",
        medication: "Asprin,Warfarin",
        surgicalNotes: "The Patient was operated on......",
        editflag: false,
        highlightflag: false
      }
    ];

    const ttt3 = [
      {
        index: 1,
        vaccineName: "Polio,unspecified formulation",
        dataTaken: "08 Jun 2017",
        editflag: false,
        highlightflag: false
      },
      {
        index: 2,
        vaccineName: "Polio,unspecified formulation",
        dataTaken: "08 Jun 2017",
        editflag: false,
        highlightflag: false
      }
    ];

    const ttt4 = [
      {
        index: 1,
        familyHistory: "Father is suffering from fever since last 40 days",
        editflag: false,
        highlightflag: false
      },
      {
        index: 2,
        familyHistory: "Father is suffering from fever since last 40 days",
        editflag: false,
        highlightflag: false
      }
    ];

    return {
      medicalhistory: ttt1,
      editData1: [
        {
          index: 1,
          disease: "Hypertension",
          duration: "3 years 4 months",
          regularMedication: false,
          medication: "Furosemide",
          editflag: false,
          highlightflag: false
        },
        {
          index: 2,
          disease: "Hypertension",
          duration: "3 years 4 months",
          regularMedication: true,
          medication: "Furosemide",
          editflag: false,
          highlightflag: false
        }
      ],
      surgicalHistory: ttt2,
      editData2: [
        {
          index: 1,
          surgeryName: "Hypertension",
          dateTaken: "08 Jun 2017",
          medication: "Asprin,Warfarin",
          surgicalNotes: "The Patient was operated on......",
          editflag: false,
          highlightflag: false
        },
        {
          index: 2,
          surgeryName: "Hypertension",
          dateTaken: "08 Jun 2017",
          medication: "Asprin,Warfarin",
          surgicalNotes: "The Patient was operated on......",
          editflag: false,
          highlightflag: false
        }
      ],
      immunizationHistory: ttt3,
      editData3: [
        {
          index: 1,
          vaccineName: "Polio,unspecified formulation",
          dataTaken: "08 Jun 2017",
          editflag: false,
          highlightflag: false
        },
        {
          index: 2,
          vaccineName: "Polio,unspecified formulation",
          dataTaken: "08 Jun 2017",
          editflag: false,
          highlightflag: false
        }
      ],
      familyHistory: ttt4,
      editData4: [
        {
          index: 1,
          familyHistory: "Father is suffering from fever since last 40 days",
          editflag: false,
          highlightflag: false
        },
        {
          index: 2,
          familyHistory: "Father is suffering from fever since last 40 days",
          editflag: false,
          highlightflag: false
        }
      ]
    };
  },
  methods: {
    changeEditFlag(data, _index, tablename) {
      switch (tablename) {
        case "MedicalHistory":
          this.medicalhistory[_index].editflag = !this.medicalhistory[_index]
            .editflag;

          if (this.medicalhistory[_index].editflag) {
            this.medicalhistory.forEach((cur, key) => {
              this.medicalhistory[key].highlightflag =
                key === _index ? false : true;
            });
          } else {
            this.medicalhistory.forEach((cur, key) => {
              this.medicalhistory[key].highlightflag = false;
            });
            this.medicalhistory[_index] = Object.assign({}, data);
          }
          break;
        case "SurgicalHistory":
          this.surgicalHistory[_index].editflag = !this.surgicalHistory[_index]
            .editflag;

          if (this.surgicalHistory[_index].editflag) {
            this.surgicalHistory.forEach((cur, key) => {
              this.surgicalHistory[key].highlightflag =
                key === _index ? false : true;
            });
          } else {
            this.surgicalHistory.forEach((cur, key) => {
              this.surgicalHistory[key].highlightflag = false;
            });
            this.surgicalHistory[_index] = Object.assign({}, data);
          }
          break;
        case "ImmunizationHistory":
          this.immunizationHistory[_index].editflag = !this.immunizationHistory[
            _index
          ].editflag;

          if (this.immunizationHistory[_index].editflag) {
            this.immunizationHistory.forEach((cur, key) => {
              this.immunizationHistory[key].highlightflag =
                key === _index ? false : true;
            });
          } else {
            this.immunizationHistory.forEach((cur, key) => {
              this.immunizationHistory[key].highlightflag = false;
            });
            this.immunizationHistory[_index] = Object.assign({}, data);
          }
          break;
        case "FamilyHistory":
          this.familyHistory[_index].editflag = !this.familyHistory[_index]
            .editflag;

          if (this.familyHistory[_index].editflag) {
            this.familyHistory.forEach((cur, key) => {
              this.familyHistory[key].highlightflag =
                key === _index ? false : true;
            });
          } else {
            this.familyHistory.forEach((cur, key) => {
              this.familyHistory[key].highlightflag = false;
            });
            this.familyHistory[_index] = Object.assign({}, data);
          }
          break;
      }
    },
    cancelEdit(data, _index, tablename) {
      let editData123;
      switch (tablename) {
        case "MedicalHistory":
          this.medicalhistory[_index].editflag = false;
          this.medicalhistory.forEach((cur, key) => {
            this.medicalhistory[key].highlightflag = false;
          });
          this.editData1[_index] = Object.assign({}, data);
          editData123 = this.editData1;
          this.editData1 = Object.assign({}, editData123);
          break;
        case "SurgicalHistory":
          this.surgicalHistory[_index].editflag = false;
          this.surgicalHistory.forEach((cur, key) => {
            this.surgicalHistory[key].highlightflag = false;
          });
          this.editData2[_index] = Object.assign({}, data);
          editData123 = this.editData2;
          this.editData2 = Object.assign({}, editData123);
          break;
        case "ImmunizationHistory":
          this.immunizationHistory[_index].editflag = false;
          this.immunizationHistory.forEach((cur, key) => {
            this.immunizationHistory[key].highlightflag = false;
          });
          this.editData3[_index] = Object.assign({}, data);
          editData123 = this.editData3;
          this.editData3 = Object.assign({}, editData123);
          break;
        case "FamilyHistory":
          this.familyHistory[_index].editflag = false;
          this.familyHistory.forEach((cur, key) => {
            this.familyHistory[key].highlightflag = false;
          });
          this.editData4[_index] = Object.assign({}, data);
          editData123 = this.editData4;
          this.editData4 = Object.assign({}, editData123);
          break;
      }
    }
  }
};
</script>
