<template>
    <div class="card_box boxs_bottom">
        <div class="card_body py-4">

            <div class="with_icon_dropdown_c set_on_h">
                <span class="control_icon"><span class="txt"></span><span class="green_circle_icon"></span></span>
                <div class="custom-select oranged_selecter transparent" style="width:350px;">
                    <select class="" id="on_change_medication">
                        <option value="">Add Medication</option>
                        <option value="add_drug">Add Drug</option>
                        <option value="infusions">Infusions</option>
                        <option value="chemo_regimens">Chemo Regimens</option>
                    </select>
                </div>
            </div>

            <div class="infusions_area manage_area_onchange">
                <div class="row super_adder ">
                    <div class="col-md-12">
                        <div class="search_tag_box">
                            <i class="fas fa-search search_lable"></i>
                            <input placeholder="Search the tests you want to Enter." class="super_adder_input create_items_table form-control" type="text" value="" data-role="tagsinput" />
                            <a href="javascript:;" class="add_all_btn btn btn-success btn-small">Add All</a>
                        </div>
                    </div>

                    <div class="super_adder_table">
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

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="save_btn_box">
                                <a href="javascript:;" class="btn btn-success save_manage_area save_all_btn btn-small">Save & Exit</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="add_drug_area manage_area_onchange">
                <div class="row super_adder ">
                    <div class="col-md-12">
                        <div class="search_tag_box">
                            <i class="fas fa-search search_lable"></i>
                            <input placeholder="Search the tests you want to Enter." class="super_adder_input create_items_table form-control" type="text" value="" data-role="tagsinput" />
                            <a href="javascript:;" class="add_all_btn btn btn-success btn-small">Add All</a>
                        </div>
                    </div>

                    <div class="super_adder_table">
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

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="save_btn_box">
                                <a href="javascript:;" class="btn btn-success save_manage_area save_all_btn btn-small">Save & Exit</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="chemo_regims_area manage_area_onchange">
                <div class="row w-100">
                    <div class="card_body setStyle">
                        <div class="table-responsive mobile_scroll_ta">
                            <table class="styler_table">
                                <thead>
                                <tr>
                                    <th>Name of Chemo Regimen</th>
                                    <th>Duration</th>
                                    <th>Condition</th>
                                    <th>No. of Cycle</th>
                                    <th>Current Cycle</th>
                                    <th>Comments</th>
                                    <th class="td_action_row ssmaller">Actions</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr class="c_mrf_d setIt">
                                    <td>
                                        <div class="custom-select oranged_selecter transparent blueTxt" style="width:300px;">
                                            <select class="">
                                                <option value="years">AC Regimen</option>
                                                <option value="months">Composition</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="with_icon_input table_type content_show">
                                            <i class="fas fa-calendar-alt"></i>
                                            <span>30 Jun 2018</span>
                                        </div>
                                    </td>
                                    <td>Breast Cancer</td>
                                    <td>2 Cycles</td>
                                    <td>1st Cycle</td>
                                    <td>Infuse by monitoring car….</td>
                                    <td class="td_action_row ssmaller">
                                        <div class="action_holders">
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
                </div>

                <div class="row">
                    <button class="btn btn-success btn-small mx-auto my-3 save_manage_area">Save & Exit</button>
                </div>

            </div>

            <div class="medication_under_stage">
                <div class="mb_box mt-5">

                    <ul class="inner_panel_filters list-group ">
                        <li class="tab_li"><a class="list-group-item list-group-item-action  active" id="all_2" data-toggle="list" href="#all_2" role="tab">All</a></li>
                        <li class="tab_li"><a class="list-group-item list-group-item-action " id="Drug_2" data-toggle="list" href="#Drug" role="tab">Drug</a></li>
                        <li class="tab_li"><a class="list-group-item list-group-item-action " id="Infusions_2" data-toggle="list" href="#Infusions" role="tab">Infusions</a></li>
                        <li class="tab_li"><a class="list-group-item list-group-item-action " id="Chemo_Regimens_2" data-toggle="list" href="#Chemo_Regimens" role="tab">Chemo Regimens</a></li>
                    </ul>

                    <div class="table_head">
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <p>Ongoing Medications</p>
                            </div>
                            <div class="col-md-6 col-12 text-md-right text-center">
                                <p class="red">Suggestions Found</p>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive mobile_scroll_ta">

                        <table class="styler_table">
                            <thead>
                            <tr>
                                <th>S. No</th>
                                <th>Name of the Medication</th>
                                <th>Duration</th>
                                <th>Dose</th>
                                <th>Route</th>
                                <th>Frequency</th>
                                <th class="td_action_row bigger">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                 
                            <tr v-bind:class="[ongoingMedications[0].editflag? 'edit_perform':'']">
                                <td>
                                    <div v-if="!ongoingMedications[0].editflag" v-bind:style="[ ongoingMedications[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[0].index}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].index" v-model="editData1[0].index"/>
                                    <!-- <input v-else type="text" v-model="ongoingMedications[0].index"/> -->
                                </td>
                                <td class="blue organs_cont">
                                    <span v-if="!ongoingMedications[0].editflag" class="txt" v-bind:style="[ ongoingMedications[0].highlightflag?{'color':'lightgrey'}:{'color':'cornflowerblue'}]">{{ongoingMedications[0].medicineName}}</span>
                                    <div v-if="!ongoingMedications[0].editflag" class="organs">
                                        <img src="assets/images/icons/heart.png" alt="">
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].medicineName" v-model="editData1[0].medicineName"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[0].editflag" class="with_icon_input table_type content_show">
                                        <i class="fas fa-calendar-alt"></i>
                                        <span  v-bind:style="[ ongoingMedications[0].highlightflag?{'color':'lightgrey'}:{undefined}]">{{ongoingMedications[0].duration}}</span>
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].duration" v-model="editData1[0].duration"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[0].editflag"  v-bind:style="[ ongoingMedications[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[0].dose}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].dose" v-model="editData1[0].dose"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[0].editflag"  v-bind:style="[ ongoingMedications[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[0].route}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].route" v-model="editData1[0].route"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[0].editflag"  v-bind:style="[ ongoingMedications[0].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[0].Frequency}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[0].Frequency" v-model="editData1[0].Frequency"/>
                                </td>
                                <td class="td_action_row bigger">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="" v-on:click="changeEditFlag(editData1[0],0)"><img src="assets/images/icons/edit_pen.png" alt="">{{!ongoingMedications[0].editflag?"Edit":"Save"}}</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="" v-if="!ongoingMedications[0].editflag" ><img src="assets/images/icons/stop.png" alt="">Stop</a>
                                            <a href="javascript:;" class="" v-else @click="cancelEdit(ongoingMedications[0],0)"><img src="assets/images/icons/stop.png" alt="">Cancel</a>
                                        </div>
                                        <div class="action_td"><a href="javascript:;" class="" v-if="!ongoingMedications[0].editflag"><img src="assets/images/icons/alter.png" alt="">Alter</a></div>
                                        <div class="action_td" v-if="!ongoingMedications[0].editflag">
                                            <div class="dropdown sort_filter in_table_dropdown">
                                                <a class="sort_icon" href="javascript:;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu bootstrap_d with_icons" aria-labelledby="dropdownMenuButton">

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Medicine Info</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/dosage_info.png" alt="">
                                                        <span class="txt">Dosage Information</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/monitoring_params.png" alt="">
                                                        <span class="txt">Monitoring Parameters</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/conselling.png" alt="">
                                                        <span class="txt">Counselling Points</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/drug_interactions.png" alt="">
                                                        <span class="txt">Drug Interactions</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Diesease Interactions</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Food Interactions</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Side Effects</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Available Brands</span>
                                                    </a>


                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/leaflet.png" alt="">
                                                        <span class="txt">LeafLet</span>
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            <tr v-bind:class="[ongoingMedications[1].editflag? 'edit_perform':'']">
                                <td>
                                    <div v-if="!ongoingMedications[1].editflag" v-bind:style="[ ongoingMedications[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[1].index}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].index" v-model="editData1[1].index"/>
                                </td>
                                <td class="blue organs_cont">
                                    <span v-if="!ongoingMedications[1].editflag" class="txt" v-bind:style="[ ongoingMedications[1].highlightflag?{'color':'lightgrey'}:{'color':'cornflowerblue'}]">{{ongoingMedications[1].medicineName}}</span>
                                    <div v-if="!ongoingMedications[1].editflag" class="organs">
                                        <img src="assets/images/icons/heart.png" alt="">
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].medicineName" v-model="editData1[1].medicineName"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[1].editflag" class="with_icon_input table_type content_show" v-bind:style="[ ongoingMedications[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        <i class="fas fa-calendar-alt"></i>
                                        <span>{{ongoingMedications[1].duration}}</span>
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].duration" v-model="editData1[1].duration"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[1].editflag" v-bind:style="[ ongoingMedications[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[1].dose}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].dose" v-model="editData1[1].dose"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[1].editflag" v-bind:style="[ ongoingMedications[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[1].route}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].route" v-model="editData1[1].route"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[1].editflag" v-bind:style="[ ongoingMedications[1].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[1].Frequency}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[1].Frequency" v-model="editData1[1].Frequency"/>
                                </td>
                                <td class="td_action_row bigger">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="" v-on:click="changeEditFlag(editData1[1],1)"><img src="assets/images/icons/edit_pen.png" alt="">{{!ongoingMedications[1].editflag?"Edit":"Save"}}</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="" v-if="!ongoingMedications[1].editflag"><img src="assets/images/icons/stop.png" alt="">Stop</a>
                                            <a href="javascript:;" class="" v-else @click="cancelEdit(ongoingMedications[1],1)"><img src="assets/images/icons/stop.png" alt="">Canncel</a>
                                        </div>
                                        <div class="action_td"><a href="javascript:;" class="" v-if="!ongoingMedications[1].editflag"><img src="assets/images/icons/alter.png" alt="">Alter</a></div>
                                        <div class="action_td" v-if="!ongoingMedications[1].editflag">
                                            <div class="dropdown sort_filter in_table_dropdown">
                                                <a class="sort_icon" href="javascript:;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu bootstrap_d with_icons" aria-labelledby="dropdownMenuButton">

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Medicine Info</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/dosage_info.png" alt="">
                                                        <span class="txt">Dosage Information</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/monitoring_params.png" alt="">
                                                        <span class="txt">Monitoring Parameters</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/conselling.png" alt="">
                                                        <span class="txt">Counselling Points</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/drug_interactions.png" alt="">
                                                        <span class="txt">Drug Interactions</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Diesease Interactions</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Food Interactions</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Side Effects</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Available Brands</span>
                                                    </a>


                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/leaflet.png" alt="">
                                                        <span class="txt">LeafLet</span>
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            <tr v-bind:class="[ongoingMedications[2].editflag? 'edit_perform':'']">
                                <td>
                                    <div v-if="!ongoingMedications[2].editflag" v-bind:style="[ ongoingMedications[2].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[2].index}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].index" v-model="editData1[2].index"/>
                                </td>
                                <td class="blue organs_cont">
                                    <span v-if="!ongoingMedications[2].editflag" class="txt" v-bind:style="[ ongoingMedications[2].highlightflag?{'color':'lightgrey'}:{'color':'cornflowerblue'}]">{{ongoingMedications[2].medicineName}}</span>
                                    <div v-if="!ongoingMedications[2].editflag" class="organs">
                                        <img src="assets/images/icons/heart.png" alt="">
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].medicineName" v-model="editData1[2].medicineName"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[2].editflag" class="with_icon_input table_type content_show" v-bind:style="[ ongoingMedications[2].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        <i class="fas fa-calendar-alt"></i>
                                        <span>{{ongoingMedications[2].duration}}</span>
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].duration" v-model="editData1[2].duration"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[2].editflag" v-bind:style="[ ongoingMedications[2].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[2].dose}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].dose" v-model="editData1[2].dose"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[2].editflag" v-bind:style="[ ongoingMedications[2].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[2].route}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].route" v-model="editData1[2].route"/>
                                </td>
                                <td>
                                    <div v-if="!ongoingMedications[2].editflag" v-bind:style="[ ongoingMedications[2].highlightflag?{'color':'lightgrey'}:{undefined}]">
                                        {{ongoingMedications[2].Frequency}}
                                    </div>
                                    <a-input v-else v-bind:defaultValue="editData1[2].Frequency" v-model="editData1[2].Frequency"/>
                                </td>
                                <td class="td_action_row bigger">
                                    <div class="action_holders">
                                        <div class="action_td"><a href="javascript:;" class="" v-on:click="changeEditFlag(editData1[2],2)"><img src="assets/images/icons/edit_pen.png" alt="">{{!ongoingMedications[2].editflag?"Edit":"Save"}}</a></div>
                                        <div class="action_td">
                                            <a href="javascript:;" class="" v-if="!ongoingMedications[2].editflag"><img src="assets/images/icons/stop.png" alt="">Stop</a>
                                            <a href="javascript:;" class="" v-else @click="cancelEdit(ongoingMedications[2],2)"><img src="assets/images/icons/stop.png" alt="">Cancel</a>
                                        </div>
                                        <div class="action_td"><a href="javascript:;" class="" v-if="!ongoingMedications[2].editflag"><img src="assets/images/icons/alter.png" alt="">Alter</a></div>
                                        <div class="action_td" v-if="!ongoingMedications[2].editflag">
                                            <div class="dropdown sort_filter in_table_dropdown">
                                                <a class="sort_icon" href="javascript:;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu bootstrap_d with_icons" aria-labelledby="dropdownMenuButton">

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Medicine Info</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/dosage_info.png" alt="">
                                                        <span class="txt">Dosage Information</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/monitoring_params.png" alt="">
                                                        <span class="txt">Monitoring Parameters</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/conselling.png" alt="">
                                                        <span class="txt">Counselling Points</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/drug_interactions.png" alt="">
                                                        <span class="txt">Drug Interactions</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Diesease Interactions</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Food Interactions</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Side Effects</span>
                                                    </a>

                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/medical_info.png" alt="">
                                                        <span class="txt">Available Brands</span>
                                                    </a>


                                                    <a class="dropdown-item" href="">
                                                        <img src="assets/images/icons/leaflet.png" alt="">
                                                        <span class="txt">LeafLet</span>
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            
                            </tbody>
                        </table>
                    </div>

                    <div class="mb_box mt-2">


                        <div class="table_head">
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <p>Withdrawn Medications</p>
                                </div>
                            </div>
                        </div>

                        <div class="table-responsive mobile_scroll_ta">

                            <table class="styler_table">
                                <thead>
                                <tr>
                                    <th>S. No</th>
                                    <th>Name of the Medication</th>
                                    <th>Date Withdrawn</th>
                                    <th>Dose</th>
                                    <th>Route</th>
                                    <th>Frequency</th>
                                    <th class="td_action_row smaller"></th>
                                </tr>
                                </thead>
                                <tbody>

                               

                                <tr>
                                    <td>1</td>
                                    <td class="blue organs_cont">
                                        <span class="txt">Aspirin</span>
                                    </td>
                                    <td>30 Jun 2018 to 1 July 2018</td>
                                    <td>150 mg</td>
                                    <td>Oral</td>
                                    <td>Once a week</td>
                                    <td class="td_action_row smaller">
                                        <div class="action_holders">
                                            <div class="action_td">
                                                <div class="dropdown sort_filter in_table_dropdown">
                                                    <a class="sort_icon" href="javascript:;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-v"></i>
                                                    </a>
                                                    <div class="dropdown-menu bootstrap_d with_icons" aria-labelledby="dropdownMenuButton">

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Medicine Info</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/dosage_info.png" alt="">
                                                            <span class="txt">Dosage Information</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/monitoring_params.png" alt="">
                                                            <span class="txt">Monitoring Parameters</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/conselling.png" alt="">
                                                            <span class="txt">Counselling Points</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/drug_interactions.png" alt="">
                                                            <span class="txt">Drug Interactions</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Diesease Interactions</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Food Interactions</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Side Effects</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Available Brands</span>
                                                        </a>


                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/leaflet.png" alt="">
                                                            <span class="txt">LeafLet</span>
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td class="blue organs_cont">
                                        <span class="txt">Warfarin</span>
                                    </td>
                                    <td>20 Jun 2018 to 15 July 2018</td>
                                    <td>150 mg</td>
                                    <td>Oral</td>
                                    <td>Once a week</td>
                                    <td class="td_action_row smaller">
                                        <div class="action_holders">
                                            <div class="action_td">
                                                <div class="dropdown sort_filter in_table_dropdown">
                                                    <a class="sort_icon" href="javascript:;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-v"></i>
                                                    </a>
                                                    <div class="dropdown-menu bootstrap_d with_icons" aria-labelledby="dropdownMenuButton">

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Medicine Info</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/dosage_info.png" alt="">
                                                            <span class="txt">Dosage Information</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/monitoring_params.png" alt="">
                                                            <span class="txt">Monitoring Parameters</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/conselling.png" alt="">
                                                            <span class="txt">Counselling Points</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/drug_interactions.png" alt="">
                                                            <span class="txt">Drug Interactions</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Diesease Interactions</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Food Interactions</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Side Effects</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Available Brands</span>
                                                        </a>


                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/leaflet.png" alt="">
                                                            <span class="txt">LeafLet</span>
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td class="blue organs_cont">
                                        <span class="txt">Pantoprozole + Domperidone</span>
                                    </td>
                                    <td>20 Jun 2018 to 30 Jun 2018</td>
                                    <td>150 mg</td>
                                    <td>Oral</td>
                                    <td>Once a week</td>
                                    <td class="td_action_row smaller">
                                        <div class="action_holders">
                                            <div class="action_td">
                                                <div class="dropdown sort_filter in_table_dropdown">
                                                    <a class="sort_icon" href="javascript:;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fas fa-ellipsis-v"></i>
                                                    </a>
                                                    <div class="dropdown-menu bootstrap_d with_icons" aria-labelledby="dropdownMenuButton">

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Medicine Info</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/dosage_info.png" alt="">
                                                            <span class="txt">Dosage Information</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/monitoring_params.png" alt="">
                                                            <span class="txt">Monitoring Parameters</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/conselling.png" alt="">
                                                            <span class="txt">Counselling Points</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/drug_interactions.png" alt="">
                                                            <span class="txt">Drug Interactions</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Diesease Interactions</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Food Interactions</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Side Effects</span>
                                                        </a>

                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/medical_info.png" alt="">
                                                            <span class="txt">Available Brands</span>
                                                        </a>


                                                        <a class="dropdown-item" href="">
                                                            <img src="assets/images/icons/leaflet.png" alt="">
                                                            <span class="txt">LeafLet</span>
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                    <div class="pad_footer">
                        <div class="row">
                            <div class="col-md-12 col-12">
                                <p>Here are some information  in regard to <a href="javascript:;" class="success">IP-212324</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-9 mx-auto col-12">
                                <div class="row">
                                    <div class="col-md-4 col-12">
                                        <p><img src="assets/images/icons/know_more.png" alt="">Disease Interactions <a href="javascript:;" class="success">12</a></p>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <p><img src="assets/images/icons/know_more.png" alt="">Drug Interactions <a href="javascript:;" class="success">12</a></p>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <p><img src="assets/images/icons/know_more.png" alt="">Therapeutic Duplication <a href="javascript:;" class="success">12</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-12">
                                <p>Want to know more about Line of Therapy for this Patient’s Diagnosis? <a href="javascript:;" class="success">Click Here</a></p>
                            </div>
                        </div>
                        <p><small>Suggested by CliniRex AI</small></p>
                    </div>
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
        index: 1,
        medicineName: "Aspirin",
        duration: "30 Jun 2018",
        dose: "150mg",
        route: "Oral",
        Frequency: "Once a week",
        editflag: false,
        highlightflag: false
      },
      {
        index: 2,
        medicineName: "Warfarin",
        duration: "30 Jun 2018",
        dose: "150mg",
        route: "Oral",
        Frequency: "Once a week",
        editflag: false,
        highlightflag: false
      },
      {
        index: 3,
        medicineName: "Pantoprozole + Domperidone",
        duration: "30 Jun 2018",
        dose: "150mg",
        route: "Oral",
        Frequency: "Once a week",
        editflag: false,
        highlightflag: false
      }
    ];
    return {
      ongoingMedications: ttt,
      editData1: [
        {
          index: 1,
          medicineName: "Aspirin",
          duration: "30 Jun 2018",
          dose: "150mg",
          route: "Oral",
          Frequency: "Once a week",
          editflag: false,
          highlightflag: false
        },
        {
          index: 2,
          medicineName: "Warfarin",
          duration: "30 Jun 2018",
          dose: "150mg",
          route: "Oral",
          Frequency: "Once a week",
          editflag: false,
          highlightflag: false
        },
        {
          index: 3,
          medicineName: "Pantoprozole + Domperidone",
          duration: "30 Jun 2018",
          dose: "150mg",
          route: "Oral",
          Frequency: "Once a week",
          editflag: false,
          highlightflag: false
        }
      ]
    };
  },
  methods: {
    changeEditFlag(data, _index) {
      this.ongoingMedications[_index].editflag = !this.ongoingMedications[
        _index
      ].editflag;

      if (this.ongoingMedications[_index].editflag) {
        this.ongoingMedications.forEach((cur, key) => {
          this.ongoingMedications[key].highlightflag =
            key === _index ? false : true;
        });
      } else {
        this.ongoingMedications.forEach((cur, key) => {
          this.ongoingMedications[key].highlightflag = false;
        });
        this.ongoingMedications[_index] = Object.assign({}, data);
      }
    },
    cancelEdit(data, _index) {
      this.ongoingMedications[_index].editflag = false;
      this.ongoingMedications.forEach((cur, key) => {
        this.ongoingMedications[key].highlightflag = false;
      });
      this.editData1[_index] = Object.assign({}, data);
      const editData123 = this.editData1;
      this.editData1 = Object.assign({}, editData123);
    }
  }
};
</script>
