<template>
    <div>
        <div class="card_box boxs_bottom">
            <div class="card_body">
                <div class="label_head">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <p class="simple_with_icon"><span class="green_circle_icon chked icon_w"></span><span class="txt success">Patient Diagnosis</span></p>
                        </div>
                        <div class="col-md-6 col-12">
                            <a href="javascript:;" class="label_head_link">Add New</a>
                        </div>
                    </div>
                </div>
                <div class="label_body">

                    <div class="table-responsive mt-4 mb_no_respon">
                        <table class="styler_table reverse_table">
                            <thead>
                            <tr>
                                <th>Diagnosis</th>
                                <th>Type</th>
                                <th colspan="3">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input placeholder="Enter name of the Diagnosis" type="text" class="form-control td_style_input"></td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                        <select class="">
                                            <option value="years">Type of Diagnosis</option>
                                            <option value="months">Normal</option>
                                        </select>
                                    </div>
                                </td>
                                <td><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></td>
                                <td><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                    <div class="delete_overlay">
                                        <ul>
                                            <li class="label">Are you sure? </li>
                                            <li class="action red"><a href="">Delete</a></li>
                                            <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                        </ul>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td><input placeholder="Enter name of the Diagnosis" type="text" class="form-control td_style_input"></td>
                                <td>
                                    <div class="custom-select oranged_selecter transparent" style="width:300px;">
                                        <select class="">
                                            <option value="years">Type of Diagnosis</option>
                                            <option value="months">Normal</option>
                                        </select>
                                    </div>
                                </td>
                                <td><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></td>
                                <td><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                    <div class="delete_overlay">
                                        <ul>
                                            <li class="label">Are you sure? </li>
                                            <li class="action red"><a href="">Delete</a></li>
                                            <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                        </ul>
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
                                <th>Diagnosis</th>
                                <th>Type</th>
                                <th colspan="3">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td><input placeholder="Enter fever" type="text" class="form-control td_style_input"></td>
                                <td class="yellow">Provisional</td>
                                <td><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></td>
                                <td><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                    <div class="delete_overlay">
                                        <ul>
                                            <li class="label">Are you sure? </li>
                                            <li class="action red"><a href="">Delete</a></li>
                                            <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                        </ul>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td><input placeholder="Enter fever" type="text" class="form-control td_style_input"></td>
                                <td class="yellow">Provisional</td>
                                <td><a href="javascript:;" class="success"><img src="assets/images/icons/save_2.png" alt="">Save</a></td>
                                <td><a href="javascript:;" class="success perform_tbl_delete"><img src="assets/images/icons/trash.png" alt="">Delete</a>
                                    <div class="delete_overlay">
                                        <ul>
                                            <li class="label">Are you sure? </li>
                                            <li class="action red"><a href="">Delete</a></li>
                                            <li class="cancel"><a href="javascript:;" class="hide_tbl_del_action">Cancel</a></li>
                                        </ul>
                                    </div>
                                </td>

                            </tr>
                            </tbody>
                        </table>
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
        </div>
    </div>
</template>