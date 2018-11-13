<template>
    <div class="card_box boxs_bottom">

        <div class="col-12">
            <div class="row disease_stats_box">
                <div class="col-md-9 col-12">
                    <div class="disease_box">
                        <h5><span class="txt">Fasting Blood Sugar (FBS)</span> <a href="javascript:;"><span class="green_circle_icon"></span></a></h5>
                        <p class="my-2">Normal Range: <span class="lightgrey">(70-110 mg/dl)</span></p>
                        <p class="my-2"><small class="lightgrey">Know more about this Laboratory Parameter</small></p>
                    </div>
                </div>
                <div class="col-md-3 col-12">
                    <div class="graph_object">
                        <div class="chart_header">
                            <div class="row">
                                <div class="col-12 chart_info_head mx-auto">
                                    <a href="javascript:;" class="chart_info blue">40 (29 June 2018)</a>
                                </div>
                            </div>
                        </div>
                        <div class="chart_holder">
                            <canvas class="chart" data-chart="1,2,1,2.3,2.5,2.1"  width="100" height="30"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">

            <div class="col-12">
                <ul class="switcher fit_all">
                    <li><a href="javascript:;">All</a></li>
                    <li class="active"><a href="javascript:;">Blood Glucose</a></li>
                    <li><a href="javascript:;">Renal Function Tests</a></li>
                    <li><a href="javascript:;">Lever Function Tests</a></li>
                    <li><a href="javascript:;">Electrolytes</a></li>
                    <li><a href="javascript:;">Hematology</a></li>
                    <li><a href="javascript:;">Others</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
