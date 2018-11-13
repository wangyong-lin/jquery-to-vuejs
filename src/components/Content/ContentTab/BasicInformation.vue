<template>
    <div>
        <div class="card_box boxs_bottom">
            <div class="card_body">

                <div class="label_head">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <p class="simple_with_icon"><span class="green_circle_icon chked icon_w"></span> <span class="txt success">Admission Details</span></p>
                        </div>
                    </div>
                </div>
                <div class="label_body">

                    <div class="profiler_forms">
                        <div class="row">

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Name of Hospital <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                            <select class="">
                                                <option value="years">Select hospital from dropdown</option>
                                                <option value="months">Hospital 1</option>
                                                <option value="months">Hospital 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Type <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                            <select class="">
                                                <option value="years">Select type here</option>
                                                <option value="months">Type 1</option>
                                                <option value="months">Type 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Unit <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                            <select class="">
                                                <option value="years">Select Unit here</option>
                                                <option value="months">Unit 1</option>
                                                <option value="months">Unit 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Registration No <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <input type="text" placeholder="Enter Registration no here" class="form-control">
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div class="row">
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">IP Number <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <input type="text" placeholder="Select Date from Calendar" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Date of Admission <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <div class="with_icon_input table_type">
                                            <i class="fas fa-calendar-alt"></i>
                                            <input required="" placeholder="Select Date" class="datepicker_2 form-control" type="text">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div class="label_head mt-3">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <p class="simple_with_icon orange"><span class="green_circle_icon explanation icon_w"></span><span class="txt">Patient Details</span></p>
                        </div>
                    </div>
                </div>
                <div class="label_body">

                    <div class="profiler_forms">
                        <div class="row">

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Patient Name <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <input type="text" placeholder="Enter Patient Name" class="form-control">
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Gender <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                            <select class="">
                                                <option value="years">Male</option>
                                                <option value="months">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Age <span class="asterik">*</span></label>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="custom_form_field">
                                                <input type="text" placeholder="Years" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="custom_form_field">
                                                <input type="text" placeholder="Months" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">City <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <input type="text" placeholder="Enter City" class="form-control">
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Reason for admission <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <input type="text" placeholder="Enter resons seprated by comma e.g. fever, vomitting, abdominal pain" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Allergies <span class="asterik">*</span></label>
                                    <div class="custom_form_field">
                                        <input type="text" placeholder="Enter Allergies sperated from comma e.g. fur, asprin, dust" class="form-control">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div class="label_head mt-3">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <p class="simple_with_icon blue"><span class="flt_image"><img class="" src="assets/images/icons/case.png" alt=""></span><span class="txt">Physiological information </span></p>
                        </div>
                    </div>
                </div>
                <div class="label_body">

                    <div class="profiler_forms">
                        <div class="row">

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Pulse</label>
                                    <div class="custom_form_field">
                                        <input type="text" placeholder="72" class="form-control">
                                        <span class="right-label">Beats per minute (BPM)</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Blood Pressure</label>
                                    <div class="custom_form_field">
                                        <input type="text" placeholder="120 / 80" class="form-control">
                                        <span class="right-label">mmHg</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Weight</label>
                                    <div class="custom_form_field">
                                        <input type="text" placeholder="Enter Weight here" class="form-control">
                                        <span class="right-label">Kilograms (KGs)</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Height</label>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="custom_form_field">
                                                <input type="text" placeholder="10" class="form-control">
                                                <span class="right-label">feet</span>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="custom_form_field">
                                                <input type="text" placeholder="10" class="form-control">
                                                <span class="right-label">inches</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>


                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <div class="question_form_field">
                                        <span>Do you want to add the Additional Information of the patient?</span>
                                        <div class="option_area">
                                            <button class="btn btn-small btn-success">Yes</button>
                                            <button class="btn btn-small btn-blank">No</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Location Type</label>
                                    <div class="custom_form_field">
                                        <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                            <select class="">
                                                <option value="years">Select from dropdown</option>
                                                <option value="months">Ludhiana</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Address</label>
                                    <div class="custom_form_field">
                                        <input placeholder="Enter your address here." type="text" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Mobile Number</label>
                                    <div class="custom_form_field">
                                        <input placeholder="Enter Mobile Number here." type="text" class="form-control">
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="row">

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Occupation</label>
                                    <div class="custom_form_field">
                                        <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                            <select class="">
                                                <option value="years">Select from dropdown</option>
                                                <option value="months">Private</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Annual Income</label>
                                    <div class="custom_form_field">
                                        <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                            <select class="">
                                                <option value="years">Select from dropdown</option>
                                                <option value="months">Private</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Blood Group</label>
                                    <div class="custom_form_field">
                                        <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                            <select class="">
                                                <option value="years">Select from dropdown</option>
                                                <option value="months">Private</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="">Insurance</label>
                                    <div class="custom_form_field">
                                        <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                            <select class="">
                                                <option value="years">Select from dropdown</option>
                                                <option value="months">Private</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>

                </div>



                <div class="col-12">
                    <div class="pad_footer  pb-0 pt-5">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <p><img src="assets/images/icons/know_more.png" alt="">Body Mass Index <a href="javascript:;" class="success">4.5 (Normal)</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <p><img src="assets/images/icons/know_more.png" alt="">Body Surface Area  <a href="javascript:;" class="success">1.56m</a></p>
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
