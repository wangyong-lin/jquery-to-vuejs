<template>
    <div id="navbar">
            <div class="row">
        <div class="col-md-6 col-2">
            <ul>
                <li>
                    <a href="javascript:;" class="menu_opener"><i class="fas fa-bars"></i></a>
                </li>
                <li class="mob_hidden">
                    <a href="javascript:;" class="brand_logo">
                        <img src="assets/images/logo.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-md-6 col-10">
            <ul class="menu_sec">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle pr_cu user_dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="img_holder status_boxi">
                            <img src="assets/images/profile.png" alt="">
                            <span class="status online"></span>
                        </div>
                        <span class="u_name">Vikas Raj Yadav</span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="javascript:;">Edit Profile</a>
                        <a class="dropdown-item" href="javascript:;">Logout</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link small_pl" href="#">
                        <div class="img_holder">
                            <img src="assets/images/icons/bulb.png" alt="">
                            <span class="status online"></span>
                        </div>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link small_pl" href="#">
                        <div class="img_holder">
                            <img src="assets/images/icons/cog.png" alt="">
                            <span class="status online"></span>
                        </div>
                    </a>
                </li>
                <li class="nav-item message_box dropdown">
                    <a class="nav-link right_sidebar_toggler" href="#"  role="button" >
                        <span class="hider"><i class="fas fa-arrow-right"></i></span>
                        <img src="assets/images/icons/chat.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
/* #navbar {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 999999;
  background: #fff;
  box-shadow: 0px 0px 15px #dedede;
}

#navbar ul {
  list-style: none;
  padding: 10px 0;
  margin: 0;
}

#navbar ul li {
  display: inline-block;
}

#navbar ul li a {
  padding: 10px 35px;
  display: block;
}

.brand_logo img {
  max-width: 85px;
  margin-top: -7px;
}

.user_dropdown img{
    max-width: 22px;
}

.user_dropdown .img_holder {
    float: left;
}
.user_dropdown .u_name{
    padding-left: 15px;
    color: #4f5861;
    font-size: 13px;
    font-weight: 500;
}

.dropdown-toggle.user_dropdown::after{
    display: none;
}

.small_pl{
    padding: 10px 15px !important;
}

.menu_opener{
    text-align: center;
    width: 100%;
    color: #3bcf8e;
    display: block;
    margin-top: 5px;
    font-size: 18px;
} */
</style>
