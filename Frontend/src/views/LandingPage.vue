
<template>

    <div class="mainDiv">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
            <div class="container">

                <!-- Text Logo - Use this if you don't have a graphic logo -->
                <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Tivo</a> -->

                <!-- Image Logo -->
                <!-- <a class="navbar-brand logo-image" href="index.html"><img :src="require('@/assets/images/logo.svg')"
                    alt="alternative"></a> -->

                <span class="navbar-brand logo-image">MediCloud</span>

                <!-- Mobile Menu Toggle Button -->
                <button @click="navOpen = !navOpen" class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span v-if="!navOpen" class=" fas fa-bars"></span>
                    <span v-else class=" fas fa-times"></span>
                </button>
                <!-- end of mobile menu toggle button -->

                <div :class="`collapse navbar-collapse ${navOpen ? 'show' : ''}`" id="navbarsExampleDefault">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#">HOME <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="javascript:void()"
                                @click="scrollTo('features')">FEATURES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="javascript:void()"
                                @click="scrollTo('details')">REQUEST DEMO</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="javascript:void()"
                                @click="scrollTo('pricing')">PRICING</a>
                        </li>
                    </ul>
                    <span class="nav-item">
                        <router-link class="btn-outline-sm" to="/login">LOG IN</router-link>
                    </span>
                </div>
            </div> <!-- end of container -->
        </nav> <!-- end of navbar -->
        <!-- end of navigation -->


        <!-- Header -->
        <header id="header" class="header">
            <div class="header-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 order-lg-2">
                            <div class="image-container">
                                <div class="img-wrapper">
                                    <img class="img-fluid" :src="require('@/assets/images/header-software-app.png')"
                                        alt="alternative">
                                </div> <!-- end of img-wrapper -->
                            </div> <!-- end of image-container -->
                        </div> <!-- end of col -->
                        <div class="col-lg-6 order-lg-1">
                            <div class="text-container">
                                <h1>Reshaping the healthcare tech industry</h1>
                                <p class="p-large">MediCloud is a fast-growing healthcare tech startup founded in
                                    Egypt that aims to bring the latest technologies into the medical field</p>
                                <a class="btn-solid-lg page-scroll" href="javascript:void()"
                                    @click="scrollTo('details')">SIGN UP</a>
                            </div> <!-- end of text-container -->
                        </div> <!-- end of col -->
                    </div> <!-- end of row -->
                </div> <!-- end of container -->
            </div> <!-- end of header-content -->
        </header> <!-- end of header -->
        <!-- end of header -->


        <!-- Customers -->
        <!-- <div class="slider-1"> -->
            <!-- <div class="container"> -->
                <!-- <div class="row">
                    <div class="col-lg-12">
                        <h3 class="section-title">Our New Partners and Customers</h3>
                    </div> 
                    <div class="col-lg-12">
                        <img :src="require('@/assets/images/customers.png')" alt="new-customers"
                            style="width: 100%; height: auto; object-fit: cover;">
                    </div> 
                </div>  -->
            <!-- </div> -->
        <!-- </div> -->
        <!-- end of customers -->


        <!-- Description -->
        <div class="cards-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="above-heading">DESCRIPTION</div>
                        <h2 class="h2-heading">A Central Secure Medical Data Cloud for all healthcare customers</h2>
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
                <div class="row">
                    <div class="col-lg-12">

                        <!-- Card -->
                        <div class="card">
                            <div class="card-image">
                                <img class="img-fluid" :src="require('@/assets/images/description-1.png')"
                                    alt="alternative" style="width: 200px; height: 200px; object-fit: contain;">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">End-to End Encrypted Cloud</h4>
                                <p>No more serious medical data breaches, thanks to our cutting-edge technologies,
                                    making it
                                    100% secure cloud for your confidential medical data</p>
                            </div>
                        </div>
                        <!-- end of card -->

                        <!-- Card -->
                        <div class="card">
                            <div class="card-image">
                                <img class="img-fluid" :src="require('@/assets/images/description-2.png')"
                                    alt="alternative" style="width: 200px; height: 200px; object-fit: contain;">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Centralized cloud everywhere</h4>
                                <p>Your data will be in sync wherever you go, between all hospitals, clinics, and labs
                                    with
                                    no more redundancy</p>
                            </div>
                        </div>
                        <!-- end of card -->

                        <!-- Card -->
                        <div class="card">
                            <div class="card-image">
                                <img class="img-fluid" :src="require('@/assets/images/description-3.png')"
                                    alt="alternative" style="width: 200px; height: 200px; object-fit: contain;">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Linker between all medical providers</h4>
                                <p>Easier communication between all medical providers in Egypt by providing a link for
                                    each
                                    healthcare stakeholder</p>
                            </div>
                        </div>
                        <!-- end of card -->

                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of cards-1 -->
        <!-- end of description -->


        <!-- Features -->
        <div id="features" ref="features" class="tabs">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="above-heading">FEATURES</div>
                        <h2 class="h2-heading">Our Medical Cloud Features</h2>
                        <p class="p-heading">Benefit from our valuable features and technical solutions for both
                            patients
                            and doctors</p>
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
                <div class="row">
                    <div class="col-lg-12">

                        <!-- Tabs Links -->
                        <ul class="nav nav-tabs" id="argoTabs" role="tablist">
                            <li class="nav-item patient-feature-tab">
                                <button :class="`nav-link ${isPatient ? 'active' : ''}`" id="nav-tab-1"
                                    data-toggle="tab" role="tab" aria-controls="tab-1" aria-selected="true"
                                    @click="(isPatient = true)">For
                                    Patients</button>
                            </li>
                            <li class="nav-item doctor-feature-tab">
                                <button :class="`nav-link ${isPatient ? '' : 'active'}`" id="nav-tab-2"
                                    data-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false"
                                    @click="(isPatient = false)">For
                                    Doctors</button>
                            </li>
                        </ul>

                        <!-- end of tabs links -->

                        <!-- Patient Tabs Content -->
                        <div v-if="isPatient" class="tab-content" id="argoTabsContent">

                            <!-- Tab -->
                            <div class="tab-pane show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="image-container">
                                            <img class="img-fluid feature-img"
                                                :src="require('@/assets/images/features-1.png')" alt="alternative">
                                        </div> <!-- end of image-container -->
                                    </div> <!-- end of col -->
                                    <div class="col-lg-6">
                                        <div class="text-container">
                                            <h3>Save your medical data and emergency in a secure cloud</h3>
                                            <p>Save your medical data in a secure cloud, and never worry about losing
                                                it.
                                                We will take care of it for you with 100% security
                                                Have an emergency profile to save your life with MediCard</p>
                                        </div> <!-- end of text-container -->
                                    </div> <!-- end of col -->
                                </div> <!-- end of row -->
                            </div> <!-- end of tab-pane -->
                            <!-- end of tab -->

                            <!-- Tab -->
                            <div class="tab-pane show active" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                <div class="row">
                                    <div class="col-lg-6 order-lg-2">
                                        <div class="image-container">
                                            <img class="img-fluid feature-img"
                                                :src="require('@/assets/images/features-2.png')" alt="alternative">
                                        </div> <!-- end of image-container -->
                                    </div> <!-- end of col -->
                                    <div class="col-lg-6 order-lg-first">
                                        <div class="text-container">
                                            <h3>Get Discounts up to 60%</h3>
                                            <p>Paying for your lab tests and scans can be quite expensive, With your
                                                MediCard, you can have
                                                discounts up to 60% for any labs, scans, prescriptions,
                                                and more.
                                            </p>
                                        </div> <!-- end of text-container -->
                                    </div> <!-- end of col -->
                                </div> <!-- end of row -->
                            </div> <!-- end of tab-pane -->
                            <!-- end of tab -->

                            <!-- Tab -->
                            <div class="tab-pane show active" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="image-container">
                                            <img class="img-fluid feature-img"
                                                :src="require('@/assets/images/features-3.png')" alt="alternative">
                                        </div> <!-- end of image-container -->
                                    </div> <!-- end of col -->
                                    <div class="col-lg-6">
                                        <div class="text-container">
                                            <h3>Keep track of your medical progress</h3>
                                            <p>You can keep track of having you medications by using our
                                                daily routine checklist that reminds you of taking pills.
                                                you can also benefit from our diary that keeps track of your mental
                                                health.
                                            </p>
                                        </div> <!-- end of text-container -->
                                    </div> <!-- end of col -->
                                </div> <!-- end of row -->
                            </div> <!-- end of tab-pane -->
                            <!-- end of tab -->

                        </div>
                        <!-- end of Patient tabs content -->

                        <!-- Doctors Tabs Content -->
                        <div v-else class="tab-content" id="argoTabsContent">

                            <!-- Tab -->
                            <div class="tab-pane show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="image-container">
                                            <img class="img-fluid feature-img"
                                                :src="require('@/assets/images/features-4.png')" alt="alternative">
                                        </div> <!-- end of image-container -->
                                    </div> <!-- end of col -->
                                    <div class="col-lg-6">
                                        <div class="text-container">
                                            <h3>Keep track of you records and patients</h3>
                                            <p>Using MediCloud, you can keep track of your records and patients.
                                                You can also see the records of your patients. MediCloud allows you to
                                                see useful statistics and future predictions about your clinic.
                                            </p>
                                        </div> <!-- end of text-container -->
                                    </div> <!-- end of col -->
                                </div> <!-- end of row -->
                            </div> <!-- end of tab-pane -->
                            <!-- end of tab -->

                            <!-- Tab -->
                            <div class="tab-pane show active" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                <div class="row">
                                    <div class="col-lg-6 order-lg-2">
                                        <div class="image-container">
                                            <img class="img-fluid feature-img"
                                                :src="require('@/assets/images/features-5.png')" alt="alternative">
                                        </div> <!-- end of image-container -->
                                    </div> <!-- end of col -->
                                    <div class="col-lg-6 order-lg-first">
                                        <div class="text-container">
                                            <h3>Increase your flow and revenue</h3>
                                            <p>By using MediCloud Clinic you can increase your flow and revenue
                                                by have a way of comminucation with your patients as well as giving
                                                them a card with your clinic name and logo on it.
                                            </p>
                                        </div> <!-- end of text-container -->
                                    </div> <!-- end of col -->
                                </div> <!-- end of row -->
                            </div> <!-- end of tab-pane -->
                            <!-- end of tab -->

                            <!-- Tab -->
                            <div class="tab-pane show active" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="image-container">
                                            <img class="img-fluid feature-img"
                                                :src="require('@/assets/images/features-6.png')" alt="alternative">
                                        </div> <!-- end of image-container -->
                                    </div> <!-- end of col -->
                                    <div class="col-lg-6">
                                        <div class="text-container">
                                            <h3>Reduce wasted time and money</h3>
                                            <p>Why waste time on taking the exact history of your patient if you can see
                                                it
                                                in detail in seconds, by using MediCloud you can see your patient's
                                                history
                                                by just tapping their MediCard into you phone.
                                            </p>
                                        </div> <!-- end of text-container -->
                                    </div> <!-- end of col -->
                                </div> <!-- end of row -->
                            </div> <!-- end of tab-pane -->
                            <!-- end of tab -->

                        </div>
                        <!-- end of Doctors tabs content -->

                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of tabs -->
        <!-- end of features -->

        <!-- Details -->
        <div id="details" ref="details" class="basic-1">
            <div class="container">
                <div class="row">
                    <!-- <div class="col-lg-6">
                        <div class="image-container">
                            <img class="img-fluid" :src="require('@/assets/images/features-6.png')" alt="alternative">
                        </div>
                    </div> -->

                    <div class="col-lg-8 details-container">
                        <div class="text-container" style="text-align: center;">
                            <h2>Now Is The Time to use the latest technologies in healthcare</h2>

                            <div class="row">

                                <div class="col-12 col-md-6">

                                    <p>Whether you are a Doctor or a patient, you can
                                        benefit now from our healthcare solutions
                                    </p>

                                    <p style="color:#26b3ff;">Register now to get a Free demo!</p>
                                </div>


                                <form class="form-group col-12 col-md-6">
                                    <div>
                                        <InputText v-model="demoName" id="name" type="text" class="p-inputtext-sm" placeholder="Name"
                                            required />
                                        <InputText v-model="demoEmail" id="email" type="email" class="p-inputtext-sm" placeholder="Email"
                                            required />
                                        <InputText v-model="demoPhone" id="phone" type="tel" class="p-inputtext-sm"
                                            placeholder="Phone Number" required />
                                        <br />
                                        <a class="btn-solid-reg page-scroll" href="javascript:void()" @click="sendDemoForm">SEND</a>
                                        <br />
                                        <br />
                                        <label>{{ demoError }}</label>
                                    </div>
                                </form>
                            </div>

                        </div> <!-- end of text-container -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of basic-1 -->
        <!-- end of details -->

        <!-- Pricing -->
        <div id="pricing" ref="pricing" class="cards-2 tabs">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="above-heading">PRICING</div>
                        <h2 class="h2-heading">Pricing Options Table</h2>
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item patient-feature-tab">
                        <button :class="`nav-link ${isPatient ? 'active' : ''}`" id="nav-tab-3" data-toggle="tab"
                            role="tab" aria-controls="tab-1" aria-selected="true" @click="(isPatient = true)">For
                            Patients</button>
                    </li>
                    <li class="nav-item doctor-feature-tab">
                        <button :class="`nav-link ${isPatient ? '' : 'active'}`" id="nav-tab-4" data-toggle="tab"
                            role="tab" aria-controls="tab-2" aria-selected="false" @click="(isPatient = false)">For
                            Doctors</button>
                    </li>
                </ul>
                <div class="row">
                    <div class="col-lg-12">

                        <div v-if="isPatient" class="pricing-cards">

                            <!-- Card-->
                            <div class="card">
                                <div class="card-body card-body-patients">
                                    <div class="card-title">INDVIDUAL</div>
                                    <div class="price"><span class="currency">EGP</span><span class="value">150</span>
                                    </div>
                                    <div class="frequency">Per Year</div>
                                    <div class="divider"></div>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Save all of your medical data</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Have a MediCard for emergency</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Get Discounts up to 60%</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Keep track of your medical progress</div>
                                        </li>
                                    </ul>
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll pricing-signup" href="javascript:void()"
                                            @click="scrollTo('details')">SIGN
                                            UP</a>
                                    </div>
                                </div>
                            </div> <!-- end of card -->
                            <!-- end of card -->

                            <!-- Card-->
                            <div class="card">
                                <div class="card-body card-body-patients">
                                    <div class="card-title">FAMILY</div>
                                    <div class="price"><span class="currency">EGP</span><span class="value">500</span>
                                    </div>
                                    <div class="frequency">Per Year</div>
                                    <div class="divider"></div>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Store your families data</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Get MediCard for your family</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Track your families medical progress</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Enjoy a 60% discount with your family</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Never worry about abroad members</div>
                                        </li>
                                    </ul>
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll pricing-signup" href="javascript:void()"
                                            @click="scrollTo('details')">SIGN
                                            UP</a>
                                    </div>
                                </div>
                            </div> <!-- end of card -->
                            <!-- end of card -->

                        </div> <!-- end of col -->

                        <div v-else class="pricing-cards">

                            <!-- Card-->
                            <div class="card">
                                <div class="card-body card-body-doctors">
                                    <div class="card-title">BASIC</div>
                                    <div class="frequency">14 days free, then</div>
                                    <div class="price"><span class="currency">EGP</span><span class="value">300</span>
                                        <div class="frequency">Per User Monthly</div>
                                    </div>
                                    <div class="divider"></div>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Securly save patient's records</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Access patient's medical profile</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-times"></i>
                                            <div class="media-body">Manage your clinic financially</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-times"></i>
                                            <div class="media-body">Get important statistical insights</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-times"></i>
                                            <div class="media-body">Connect and message with patients</div>
                                        </li>
                                    </ul>
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll pricing-signup" href="javascript:void()"
                                            @click="scrollTo('details')">SIGN
                                            UP</a>
                                    </div>
                                </div>
                            </div> <!-- end of card -->
                            <!-- end of card -->

                            <!-- Card-->
                            <div class="card">
                                <div class="card-body card-body-doctors">
                                    <div class="card-title">ADVANCED</div>
                                    <div class="frequency">14 days free, then</div>
                                    <div class="price"><span class="currency">EGP</span><span class="value">500</span>
                                    </div>
                                    <div class="frequency">Per User Monthly</div>
                                    <div class="divider"></div>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Securly save patient's records</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Access patient's medical profile</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Manage your clinic financially</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-times"></i>
                                            <div class="media-body">Get important statistical insights</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-times"></i>
                                            <div class="media-body">Connect and message with patients</div>
                                        </li>
                                    </ul>
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll pricing-signup" href="javascript:void()"
                                            @click="scrollTo('details')">SIGN
                                            UP</a>
                                    </div>
                                </div>
                            </div> <!-- end of card -->
                            <!-- end of card -->

                            <!-- Card-->
                            <div class="card">
                                <!--<div class="label">
                            <p class="best-value">Best Value</p>
                        </div> -->
                                <div class="card-body card-body-doctors">
                                    <div class="card-title">COMPLETE</div>
                                    <div class="frequency">14 days free, then</div>
                                    <div class="price"><span class="currency">EGP</span><span class="value">700</span>
                                    </div>
                                    <div class="frequency">Per User Monthly</div>
                                    <div class="divider"></div>
                                    <ul class="list-unstyled li-space-lg">
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Securly save patient's records</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Access patient's medical profile</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Manage your clinic financially</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Get important statistical insights</div>
                                        </li>
                                        <li class="media">
                                            <i class="fas fa-check"></i>
                                            <div class="media-body">Connect and message with patients</div>
                                        </li>
                                    </ul>
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll pricing-signup" href="javascript:void()"
                                            @click="scrollTo('details')">SIGN
                                            UP</a>
                                    </div>
                                </div>
                            </div> <!-- end of card -->
                            <!-- end of card -->

                        </div> <!-- end of col -->
                    </div>
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of cards-2 -->
        <!-- end of pricing -->


        <!-- Testimonials -->
        <div class="slider-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">

                        <div class="slider-container">
                            <div class="swiper-container text-slider">
                                <div class="swiper-wrapper">
                                    <!-- 
                                    <Carousel :value="testmonals" :autoplayInterval="5000" :circular="true">

                                        <template #item="slotProps">
                                            <div class="swiper-slide">
                                                <div class="image-wrapper">
                                                    <img class="img-fluid"
                                                        :src="require(`@/assets/images/${slotProps.data.image}`)"
                                                        alt="alternative">
                                                </div>
                                                <div class="text-wrapper">
                                                    <div class="testimonial-text">
                                                        {{ slotProps.data.text }}
                                                    </div>
                                                    <div class="testimonial-author">{{ slotProps.data.author }}</div>
                                                </div>
                                            </div> 
                                        </template>
                                    </Carousel>
 -->

                                </div> <!-- end of swiper-wrapper -->
                            </div> <!-- end of swiper-container -->
                        </div> <!-- end of slider-container -->
                        <!-- end of text slider -->

                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of slider-2 -->
        <!-- end of testimonials -->


        <!-- Newsletter -->
        <div class="form">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-container">
                            <div class="above-heading">NEWSLETTER</div>
                            <h2>Subscribe to MediCloud's newsletter to stay informed</h2>

                            <!-- Newsletter Form -->
                            <form id="newsletterForm" data-toggle="validator" data-focus="false">
                                <InputText id="newsletterEmail" type="email" placeholder="Email"
                                    v-model="newsLetterEmail" required />
                                <br />
                                <a class="btn-solid-reg page-scroll" href="javascript:void()"
                                    @click="sendNewsLetterForm">SEND</a>
                                <br/>
                                <br/>
                                <label>{{newsLetterError}}</label>
                            </form>
                            <!-- end of newsletter form -->

                        </div> <!-- end of text-container -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="icon-container">

                            <!-- todo add social links here -->

                            <a href="#" class="social-icon fa fa-facebook"></a>
                            <a href="#" class="social-icon fa fa-linkedin"></a>
                            <a href="#" class="social-icon fa fa-youtube"></a>

                        </div> <!-- end of col -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of form -->
        <!-- end of newsletter -->


        <div class="end">


            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="footer-col first">
                                <h4>About MediCloud</h4>
                                <p class="p-small">MediCloud is growing startup in Egypt
                                    aiming to reshape the way the healthcare tech industry
                                    currently works by providing cutting-edge technologies
                                    as its healthcare solutions.
                                </p>
                            </div>
                        </div> <!-- end of col -->
                        <div class="col-md-4">
                            <h4>Contact Us</h4>
                            <ul class="list-unstyled li-space-lg p-small">
                                <li class="media">
                                    <div class="media-body">
                                        <i class="fa fa-map"></i>
                                        <span>
                                            South Teseen, 5th District, New Cairo
                                        </span>
                                    </div>
                                </li>
                                <li class="media">
                                    <div class="media-body">
                                        <!-- <i class="fas fa-envelope"></i> -->
                                        <!-- <a href="mailto:contact@medicloud.com">contact@medicloud.com</a> -->
                                        <!-- <br /> -->
                                        <!-- <i class="fas fa-globe"></i> -->
                                        <!-- <a href="#your-link">www.medicloud.com</a> -->
                                    </div>
                                </li>

                                <li class="media">
                                    <div class="media-body">
                                        <i class="fa fa-mobile-phone"></i>
                                        <span>+201553554224</span>
                                    </div>
                                </li>
                            </ul>
                        </div> <!-- end of col -->
                        <div class="col-md-4">
                            <h4>Quick Links</h4>

                            <ul>
                                <li>
                                    <a href="#">Home<span class="sr-only">(current)</span></a>
                                </li>
                                <li>
                                    <a href="javascript:void()" @click="scrollTo('features')">Features</a>
                                </li>
                                <li>
                                    <a href="javascript:void()" @click="scrollTo('details')">Request Demo</a>
                                </li>

                                <li>
                                    <a href="javascript:void()" @click="scrollTo('pricing')">Pricing</a>
                                </li>
                            </ul>
                        </div>

                    </div> <!-- end of row -->
                </div> <!-- end of container -->
            </div> <!-- end of footer -->
            <!-- end of footer -->


            <!-- Copyright -->
            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="p-small">Copyright © 2022 <a href="https://www.medicloud.com">MediCloud</a></p>
                        </div> <!-- end of col -->
                    </div> <!-- enf of row -->
                </div> <!-- end of container -->
            </div> <!-- end of copyright -->
            <!-- end of copyright -->
        </div>

    </div>

</template>


<script>
import axios from "axios"

export default {
    data() {
        return {
            demoError: "",
            demoEmail: "",
            demoPhone: "",
            demoName: "",
            newsLetterError: "",
            newsLetterEmail: "",
            testmonals: [],
            isPatient: true,
            navOpen: false,
        }
    },
    mounted() {
        this.testmonals = [
            {
                image: 'testimonial-3.jpg',
                author: 'Raid ibn Kurd - Tamazug clinics owner',
                text: `MediCloud has helped me alot in my own polyclinics as it
                        provider us with many features that both patients and
                        doctors benifit from. Now I can say, MediCloud is the best!
                        Thanks for helping the Egyptian healthcare industry.`,
            },
            {
                image: 'testimonial-2.jpg',
                author: 'Dr.Ahmed Roshdi - Plastic Surgen',
                text: `The moment I saw Mostafa and Ahmed showcasing their
                        Idea in our hospital, I knew it would be the future
                        of the Egyptian healthcare system. They have shown
                        great work and commitment since the day they started.`
            },
            {
                image: 'testimonial-1.jpg',
                author: 'Om Hasan - An old Patient',
                text: `Before MediCloud I had to always keep and go with my
                        prescriptions, scans and lab tests everywhere,
                        but since my son hassan has bought me the MediCard,
                        I have a digital copy of all my medical data in my pocket!`
            }
        ]
    },
    methods: {
        scrollTo(refName) {
            const el = this.$refs[refName]
            el.scrollIntoView({ behavior: 'smooth' })
        },
        async sendNewsLetterForm() {
            if (this.newsLetterEmail === '') {
                this.newsLetterError = "Please enter your email";
            } else {
                axios.post("https://api.medicloud.care/forms/newsletter", 
                    {
                        "email": this.newsLetterEmail
                    }
                )
                .then(() => { 
                    this.newsLetterError = "Thanks for sumbitting you email, now you will get all news about MediCloud"; 
                })
                .catch(() => {
                     this.newsLetterError = "An error occured, please try again"; 
                });
            }
        },
        async sendDemoForm() {
            if (this.demoEmail === '' || this.demoPhone === '' || this.demoName === '') {
                this.demoError = "Please fill the fields in the form.";
            } else {
                axios.post("https://api.medicloud.care/forms/demo", 
                    {
                        "email": this.demoEmail,
                        "name": this.demoName,
                        "phone": this.demoPhone,
                    }
                )
                .then(() => { 
                    this.demoError = "Thanks for sumbitting the form, we will contact you soon!"; 
                })
                .catch(() => {
                     this.demoError = "An error occured, please try again"; 
                });
            }
        },
    }
}

</script>

<style scoped lang="scss">
/******************************/
/*     01. General Styles     */
/******************************/

$primary-color: #26b3ff;

body,
html {
    width: 100%;
    height: 100%;
}

.mainDiv {
    background-color: #fff;
}

body,
p {
    color: #555;
    font: 400 1rem/1.625rem "Open Sans", sans-serif;
    ;
}

.p-large {
    font: 400 1.125rem/1.75rem "Open Sans", sans-serif;
}

.p-small {
    font: 400 0.875rem/1.5rem "Open Sans", sans-serif;
}

h1 {
    color: #333;
    font: 700 2.5rem/3.125rem "Open Sans", sans-serif;
    letter-spacing: -0.2px;
}

h2 {
    color: #333;
    font: 700 2rem/2.625rem "Open Sans", sans-serif;
    letter-spacing: -0.2px;
}

h3 {
    color: #333;
    font: 700 1.625rem/2.125rem "Open Sans", sans-serif;
    letter-spacing: -0.2px;
}

h4 {
    color: #333;
    font: 700 1.375rem/1.75rem "Open Sans", sans-serif;
    letter-spacing: -0.1px;
}

h5 {
    color: #333;
    font: 700 1.125rem/1.5rem "Open Sans", sans-serif;
    letter-spacing: -0.1px;
}

h6 {
    color: #333;
    font: 700 1rem/1.375rem "Open Sans", sans-serif;
    letter-spacing: -0.1px;
}

.section-title {
    text-align: center;
}

.above-heading {
    color: $primary-color;
    font: 700 0.75rem/0.875rem "Open Sans", sans-serif;
    text-align: center;
}

.p-heading {
    margin-bottom: 3.25rem;
}

.testimonial-text {
    font: italic 400 1rem/1.625rem "Open Sans", sans-serif;
}

.testimonial-author {
    font: 700 1rem/1.625rem "Open Sans", sans-serif;
    letter-spacing: -0.1px;
}

.li-space-lg li {
    margin-bottom: 0.375rem;
}

.indent {
    padding-left: 1.25rem;
}

a {
    color: #555;
    text-decoration: underline;
}

a:hover {
    color: #555;
    text-decoration: underline;
}

a.white {
    color: #fff;
}

.decorative-line {
    display: block;
    width: 5rem;
    height: 0.5rem;
    margin-right: auto;
    margin-left: auto;
}

.blue {
    color: $primary-color;
}

.btn-solid-reg {
    display: inline-block;
    padding: 1.1875rem 2.125rem 1.1875rem 2.125rem;
    border: 0.125rem solid $primary-color;
    border-radius: 2rem;
    background-color: $primary-color;
    color: #fff;
    font: 700 0.875rem/0 "Open Sans", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
}

.btn-solid-reg:hover {
    background-color: transparent;
    color: $primary-color;
    text-decoration: none;
}

.btn-solid-lg {
    display: inline-block;
    padding: 1.375rem 2.625rem 1.375rem 2.625rem;
    border: 0.125rem solid $primary-color;
    border-radius: 2rem;
    background-color: $primary-color;
    color: #fff;
    font: 700 0.875rem/0 "Open Sans", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
}

.btn-solid-lg:hover {
    background-color: transparent;
    color: $primary-color;
    text-decoration: none;
}

.btn-outline-reg {
    display: inline-block;
    padding: 1.1875rem 2.125rem 1.1875rem 2.125rem;
    border: 0.125rem solid $primary-color;
    border-radius: 2rem;
    background-color: transparent;
    color: $primary-color;
    font: 700 0.875rem/0 "Open Sans", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
}

.btn-outline-reg:hover {
    background-color: $primary-color;
    color: #fff;
    text-decoration: none;
}

.btn-outline-lg {
    display: inline-block;
    padding: 1.375rem 2.625rem 1.375rem 2.625rem;
    border: 0.125rem solid $primary-color;
    border-radius: 2rem;
    background-color: transparent;
    color: $primary-color;
    font: 700 0.875rem/0 "Open Sans", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
}

.btn-outline-lg:hover {
    background-color: $primary-color;
    color: #fff;
    text-decoration: none;
}

.btn-outline-sm {
    display: inline-block;
    padding: 0.875rem 1.5rem 0.875rem 1.5rem;
    border: 0.125rem solid $primary-color;
    border-radius: 2rem;
    background-color: transparent;
    color: $primary-color;
    font: 700 0.875rem/0 "Open Sans", sans-serif;
    text-decoration: none;
    transition: all 0.2s;
}

.btn-outline-sm:hover {
    background-color: $primary-color;
    color: #fff;
    text-decoration: none;
}

.label-control {
    position: absolute;
    top: 0.87rem;
    left: 1.25rem;
    color: #555;
    opacity: 1;
    font: 400 0.875rem/1.375rem "Open Sans", sans-serif;
    cursor: text;
    transition: all 0.2s ease;
}

/* IE10+ hack to solve lower label text position compared to the rest of the browsers */
@media screen and (-ms-high-contrast: active),
screen and (-ms-high-contrast: none) {
    .label-control {
        top: 0.9375rem;
    }
}


/**************************/
/*     03. Navigation     */
/**************************/
.navbar-custom {
    background-color: $primary-color;
    font: 700 0.875rem/0.875rem "Open Sans", sans-serif;
    transition: all 0.2s;
}

.navbar-custom .container {
    max-width: 87.5rem;
}

.navbar-custom .navbar-brand.logo-image img {
    width: 4.4375rem;
    height: 1.75rem;
}

.navbar-custom .navbar-brand.logo-text {
    font: 700 2rem/1.5rem "Open Sans", sans-serif;
    color: #fff;
    text-decoration: none;
}

.navbar-custom .navbar-nav {
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
}

.navbar-custom .nav-item .nav-link {
    padding: 0.625rem 0.75rem 0.625rem 0.75rem;
    color: #f7f5f5;
    opacity: 0.8;
    text-decoration: none;
    transition: all 0.2s ease;
}

.navbar-custom .nav-item .nav-link:hover,
.navbar-custom .nav-item .nav-link.active {
    color: #fff;
    opacity: 1;
}

.navbar-custom .nav-item .btn-outline-sm {
    margin-top: 0.25rem;
    margin-bottom: 1.375rem;
    margin-left: 0.5rem;
    border: 0.125rem solid #fff;
    color: #fff;
}

.navbar-custom .nav-item .btn-outline-sm:hover {
    background-color: #fff;
    color: $primary-color;
}

.navbar-custom .navbar-toggler {
    padding: 0;
    border: none;
    color: #fff;
    font-size: 2rem;
}

.navbar-custom button[aria-expanded='false'] .navbar-toggler-awesome.fas.fa-times {
    display: none;
}

.navbar-custom button[aria-expanded='false'] .navbar-toggler-awesome.fas.fa-bars {
    display: inline-block;
}

.navbar-custom button[aria-expanded='true'] .navbar-toggler-awesome.fas.fa-bars {
    display: none;
}

.navbar-custom button[aria-expanded='true'] .navbar-toggler-awesome.fas.fa-times {
    display: inline-block;
    margin-right: 0.125rem;
}


/*********************/
/*    04. Header     */
/*********************/
.header {
    background: url('~@/assets/images/background.svg') no-repeat;
    background-size: cover;
    padding-bottom: 200px;
}

.header .header-content {
    // padding-top: 8rem;
    padding-bottom: 4rem;
    text-align: center;
}

.header .text-container {
    margin-bottom: 3rem;
}

.header h1 {
    margin-bottom: 1rem;
    color: #fff;
    font-size: 2.5rem;
    line-height: 3rem;
}

.header .p-large {
    margin-bottom: 2rem;
    color: #f3f7fd;
}

.header .btn-solid-lg {
    margin-right: 0.5rem;
    margin-bottom: 1.125rem;
    margin-left: 0.5rem;
    border-color: #f3f7fd;
    background-color: #f3f7fd;
    color: $primary-color;
}

.header .btn-solid-lg:hover {
    background: transparent;
    color: #f3f7fd;
}

.header .btn-outline-lg {
    border-color: #f3f7fd;
    color: #f3f7fd;
}

.header .btn-outline-lg:hover {
    background-color: #f3f7fd;
    color: $primary-color;
}

.header-frame {
    margin-top: -1px;
    /* To remove white margin in FF */
    width: 100%;
    height: 2.25rem;
}


/*************************/
/*     05. Customers     */
/*************************/
.slider-1 {
    padding-top: 5rem;
    padding-bottom: 3.25rem;
}

.slider-1 .slider-container {
    text-align: center;
}


/***************************/
/*     06. Description     */
/***************************/
.cards-1 {
    padding-top: 0.25rem;
    padding-bottom: 3rem;
    text-align: center;
}

.cards-1 .h2-heading {
    margin-bottom: 3.5rem;
}

.cards-1 .card {
    max-width: 21rem;
    margin-right: auto;
    margin-bottom: 3.5rem;
    margin-left: auto;
    padding: 0;
    border: none;
}

.cards-1 .card-image {
    max-width: 16rem;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-left: auto;
}

.cards-1 .card-title {
    margin-bottom: 0.5rem;
}

.cards-1 .card-body {
    padding: 0;
}


/************************/
/*     07. Features     */
/************************/

#features {
    padding: 30px 10px;
}

.tabs {
    padding-top: 8rem;
    padding-bottom: 8.125rem;
    background-color: #f3f7fd;
}

.tabs .h2-heading,
.tabs .p-heading {
    text-align: center;
}

.tabs .nav-tabs {
    // display: block;
    margin-bottom: 2.25rem;
    border-bottom: none;

    .patient-feature-tab {
        margin-right: 0;
        margin-left: auto;
    }

    .doctor-feature-tab {
        margin-left: 0;
        margin-right: auto;
    }
}

.tabs .text-container {
    margin-top: 2.25rem;
}

.tabs .nav-link {
    padding: 0.375rem 1rem 0.375rem 1rem;
    border: none;
    color: #86929b;
    background: transparent;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease;
}

.tabs .nav-link:hover,
.tabs .nav-link.active {
    background: transparent;
    color: $primary-color;
}

.tabs .nav-link .fas {
    margin-right: 0.625rem;
}

.tabs .image-container {
    margin-bottom: 2.75rem;
}

.tabs .list-unstyled .fas {
    color: $primary-color;
    font-size: 0.5rem;
    line-height: 1.625rem;
}

.tabs .list-unstyled .media-body {
    margin-left: 0.625rem;
}

.tabs #tab-1 {
    margin-bottom: 2.25rem;

    h3 {
        margin-bottom: 0.75rem;
    }
}

.tabs #tab-1 .list-unstyled {
    margin-bottom: 1.5rem;
}

.tabs #tab-2 {
    margin-bottom: 2.25rem;

    h3 {
        margin-bottom: 0.75rem;
    }
}

.tabs #tab-2 .list-unstyled {
    margin-bottom: 1.5rem;
}

.tabs #tab-3 {
    h3 {
        margin-bottom: 0.75rem;
    }
}

.tabs #tab-3 .list-unstyled {
    margin-bottom: 1.5rem;
}

.tab-content {
    text-align: center;
}

.feature-img {
    width: 600px;
    height: 300px;
    object-fit: cover;
    border-radius: 5%;
}

/***********************/
/*     09. Details     */
/***********************/
.details-container {
    margin: 0 auto !important;
}

#details {
    padding: 35px 20px;
    text-align: center;
}

.basic-1 {
    padding-top: 7.5rem;
    padding-bottom: 4rem;
}

.basic-1 .text-container {
    padding-top: 2.5rem;
    margin-bottom: 3.75rem;
}

.form-group {
    .input-group {
        margin-bottom: 25px;
    }


    input {
        border-radius: 10px;
        margin-bottom: 20px;
        width: 100%;
    }

    .sumbit {
        margin: 0 auto;
    }
}


/***********************/
/*     11. Pricing     */
/***********************/

.pricing-cards {
    margin-left: auto;
    margin-right: auto;
}

.pricing-signup {
    bottom: 20px;
    left: 0;
    right: 0;
    width: fit-content;
    top: auto;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
}

.cards-2 {
    // padding-top: 1.875rem;
    padding-bottom: 2.25rem;
    text-align: center;
}

.cards-2 .h2-heading {
    margin-bottom: 3.75rem;
}

.cards-2 .card {
    display: block;
    max-width: 19rem;
    margin-right: auto;
    margin-bottom: 3rem;
    margin-left: auto;
    border: 1px solid #ccd3df;
    border-radius: 0.375rem;
}

.cards-2 .card .card-body {
    padding: 2.5rem 2rem 2.75rem 2em;
}

.card-body-doctors {
    height: 600px;
}

.card-body-patients {
    height: 550px;
}

.cards-2 .card .card-title {
    margin-bottom: 0.5rem;
    color: $primary-color;
    font: 700 1.125rem/1.5rem "Open Sans", sans-serif;
}

.cards-2 .card .price .currency {
    margin-right: 0.25rem;
    color: #434c54;
    font-weight: 700;
    font-size: 1.5rem;
    vertical-align: 40%;
}

.cards-2 .card .price .value {
    color: #434c54;
    font: 700 3.25rem/3.5rem "Open Sans", sans-serif;
    text-align: center;
}

.cards-2 .card .frequency {
    font-size: 0.875rem;
}

.cards-2 .card .divider {
    height: 1px;
    margin-top: 1.75rem;
    margin-bottom: 2rem;
    border: none;
    background-color: #ccd3df;
}

.cards-2 .card .list-unstyled {
    margin-top: 1.875rem;
    margin-bottom: 1.625rem;
    text-align: left;
}

.cards-2 .card .list-unstyled .media {
    margin-bottom: 0.5rem;
}

.cards-2 .card .list-unstyled .fas {
    color: $primary-color;
    font-size: 0.875rem;
    line-height: 1.625rem;
}

.cards-2 .card .list-unstyled .fas.fa-times {
    margin-left: 0.1875rem;
    margin-right: 0.125rem;
    color: #555;
}

.cards-2 .card .list-unstyled .media-body {
    margin-left: 0.625rem;
}


/****************************/
/*     12. Testimonials     */
/****************************/
.slider-2 {
    padding-top: 2.75rem;
    padding-bottom: 4rem;
}

.slider-2 .slider-container {
    position: relative;
}

.slider-2 .swiper-container {
    position: static;
    // width: 82%;
    text-align: center;
}

.slider-2 .image-wrapper {
    width: 6rem;
    margin-right: auto;
    margin-bottom: 1rem;
    margin-left: auto;
}

.slider-2 .image-wrapper img {
    border-radius: 50%;
}

.slider-2 .testimonial-text {
    margin-bottom: 0.5rem;
}

.slider-2 .testimonial-author {
    color: #333;
}


/**************************/
/*     13. Newsletter     */
/**************************/

.form {
    // padding-top: 4rem;
    padding-bottom: 6rem;
}

.form .text-container {
    margin-bottom: 3.5rem;
    padding: 0rem 1rem 2.5rem 1rem;
    border-radius: 0.5rem;
}

.form h2 {
    margin-bottom: 2.75rem;
    text-align: center;
}

.form #newsletterForm {
    text-align: center;

    input {
        max-width: 400px;
        width: 70%;
        border-radius: 25px;
    }

    a {
        margin-top: 30px;
        width: 70%;
        max-width: 400px;
    }
}

.form .icon-container {
    text-align: center;
}

.fa,
.fas {
    font-family: 'FontAwesome' !important;
}


.social-icon {
    text-decoration: none;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
}

.social-icon:hover {
    text-decoration: none;
    opacity: 0.7;
    color: white;

}

.fa-facebook {
    background: #3B5998;
    color: white;
}

/* Youtube */
.fa-youtube {
    background: #bb0000;
    color: white;
}

/* Linkedin */
.fa-linkedin {
    background: #007bb5;
    color: white;
}


/**********************/
/*     14. Footer     */
/**********************/
.footer-frame {
    width: 100%;
    height: 1.5rem;
}

.end {
    background: url('~@/assets/images/background.svg') no-repeat;
    background-size: cover;
    padding-bottom: 150px;
}

.footer {
    padding-top: 3rem;
    padding-bottom: 0.5rem;
    text-align: center;
    align-content: center;
}

.footer .footer-col {
    margin-bottom: 2.25rem;
}

.footer h4 {
    margin-bottom: 0.625rem;
    color: #fff;
}

.footer .list-unstyled,
.footer p {
    color: #f3f7fd;
}

.footer .footer-col.middle .list-unstyled .fas {
    color: #fff;
    font-size: 0.5rem;
    line-height: 1.5rem;
}

.footer .footer-col.middle .list-unstyled .media-body {
    margin-left: 0.5rem;
}

.footer .footer-col.last .list-unstyled .fas {
    color: #fff;
    font-size: 0.875rem;
    line-height: 1.5rem;
}

.footer .footer-col.last .list-unstyled .media-body {
    margin-left: 0.625rem;
}

.footer .footer-col.last .list-unstyled .fas.fa-globe {
    margin-left: 1rem;
    margin-right: 0.625rem;
}

.footer {
    i {
        margin-right: 5px;
    }

    a {
        color: white;
        text-decoration: none;

        &:hover {
            color: skyblue;
        }
    }

    ul {
        list-style: none;
        padding-left: 0 !important;
    }

    li {
        margin-bottom: 5px;
    }
}


/*************************/
/*     15. Copyright     */
/*************************/
.copyright {
    padding-top: 1rem;
    padding-bottom: 0.375rem;
    text-align: center;
}

.copyright .p-small {
    padding-top: 1.375rem;
    color: #f3f7fd;
}

.copyright a {
    color: #f3f7fd;
    text-decoration: none;
}


/*****************************/
/*     19. Media Queries     */
/*****************************/
/* Min-width width 768px */
@media (min-width: 768px) {

    /* General Styles */
    .p-heading {
        width: 85%;
        margin-right: auto;
        margin-left: auto;
    }

    .h2-heading {
        width: 80%;
        margin-right: auto;
        margin-left: auto;
    }

    /* end of general styles */


    /* Header */
    .header .text-container {
        margin-bottom: 4rem;
    }

    .header h1 {
        font-size: 3.5rem;
        line-height: 4.125rem;
    }

    .header .btn-solid-lg {
        margin-bottom: 0;
        margin-left: 0;
    }

    .header-frame {
        height: 5.5rem;
    }

    /* end of header */


    /* Testimonials */
    .slider-2 .swiper-button-prev {
        width: 1.375rem;
        background-size: 1.375rem 2.125rem;
    }

    .slider-2 .swiper-button-next {
        width: 1.375rem;
        background-size: 1.375rem 2.125rem;
    }

    /* end of testimonials */

    /* Footer */
    .footer-frame {
        height: 5rem;
    }

    /* end of footer */


    /* Extra Pages */
    .ex-header {
        padding-top: 11rem;
        padding-bottom: 9rem;
    }

    .ex-basic-2 .text-container.dark {
        padding: 2.5rem 3rem 2rem 3rem;
    }

    .ex-basic-2 .form-container {
        margin-top: 0;
    }

    /* end of extra pages */


    /* Sign Up And Log In Pages */
    .ex-2-header {
        padding-top: 11rem;
    }

    .ex-2-header .form-container {
        padding: 2.25rem 1.75rem 1.25rem 1.75rem;
    }

    /* end of sign up and log in pages */
}

/* end of min-width width 768px */


/* Min-width width 992px */
@media (min-width: 992px) {

    /* Navigation */
    .navbar-custom {
        padding: 2.125rem 1.5rem 2.125rem 2rem;
        box-shadow: none;
    }

    .navbar-custom .navbar-nav {
        margin-top: 0;
        margin-bottom: 0;
    }

    .navbar-custom .nav-item .nav-link {
        padding: 0.25rem 0.75rem 0.25rem 0.75rem;
    }

    .navbar-custom .nav-item .nav-link:hover,
    .navbar-custom .nav-item .nav-link.active {
        opacity: 1;
    }

    .navbar-custom.top-nav-collapse {
        padding: 0.5rem 1.5rem 0.5rem 2rem;
        background-color: $primary-color;
        box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
    }

    .navbar-custom.top-nav-collapse .nav-item .nav-link:hover,
    .navbar-custom.top-nav-collapse .nav-item .nav-link.active {
        color: #fff;
    }

    .navbar-custom .dropdown-menu {
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-top: 0.25rem solid rgba(0, 0, 0, 0);
        border-radius: 0.25rem;
    }

    .navbar-custom.top-nav-collapse .dropdown-menu {
        border-top: 0.25rem solid rgba(0, 0, 0, 0);
        box-shadow: 0 0.375rem 0.375rem 0 rgba(0, 0, 0, 0.02);
    }

    .navbar-custom .dropdown-item {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
    }

    .navbar-custom .dropdown-items-divide-hr {
        width: 84%;
    }

    .navbar-custom .nav-item .btn-outline-sm {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 1rem;
    }

    /* end of navigation */


    /* General Styles */
    .p-heading {
        width: 65%;
    }

    .h2-heading {
        width: 60%;
    }

    /* end of general styles */


    /* Header */
    .header .header-content {
        text-align: left;
    }

    .header .text-container {
        margin-top: 4rem;
        margin-bottom: 0;
    }

    .header .image-container {
        position: relative;
        margin-top: 3rem;
    }

    .header .image-container .img-wrapper {
        position: absolute;
        display: block;
        width: 470px;
    }

    .img-wrapper {
        margin-left: 90px;
    }

    .header-frame {
        height: 8rem;
    }

    /* end of header */


    /* Description */
    .cards-1 .card {
        display: inline-block;
        width: 17rem;
        max-width: 100%;
        margin-right: 1rem;
        margin-left: 1rem;
        vertical-align: top;
    }

    .cards-1 .card-image {
        width: 9rem;
    }

    /* end of description */


    /* Features */
    .tabs .nav-tabs {
        display: flex;
        justify-content: center;
        margin-bottom: 2.75rem;
    }

    .tabs .nav-link {
        padding-right: 1.25rem;
        padding-left: 1.25rem;
        border-bottom: 2px solid rgb(202, 202, 202);
    }

    .tabs .nav-link:hover,
    .tabs .nav-link.active {
        border-bottom: 2px solid $primary-color;
    }

    .tabs .image-container {
        margin-bottom: 0;
    }

    /* end of features */

    /* Details */
    .basic-1 {
        padding-top: 8rem;
    }

    .basic-1 .text-container {
        margin-bottom: 0;
    }

    /* end of details */


    /* Video */
    .basic-2 .image-container {
        max-width: 53.125rem;
        margin-right: auto;
        margin-left: auto;
    }

    .basic-2 p {
        width: 65%;
        margin-right: auto;
        margin-left: auto;
    }

    /* end of video */


    /* Pricing */
    .cards-2 .card {
        display: inline-block;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        vertical-align: top;
    }

    /* end of pricing */


    /* Testimonials */
    .slider-2 .swiper-container {
        width: 92%;
        text-align: left;
    }

    .slider-2 .image-wrapper {
        float: left;
        width: 10rem;
        margin-bottom: 0;
    }

    .slider-2 .text-wrapper {
        max-width: 100%;
        margin-top: 1.25rem;
        margin-left: 13rem;
    }

    .slider-2 .swiper-button-prev {
        left: -0.75rem;
    }

    .slider-2 .swiper-button-next {
        right: -0.75rem;
    }

    /* end of testimonials */

    /* Extra Pages */
    .ex-header h1 {
        width: 80%;
        margin-right: auto;
        margin-left: auto;
    }

    .ex-basic-2 {
        padding-bottom: 5rem;
    }

    /* end of extra pages */
}

/* end of min-width width 992px */


/* Min-width width 1200px */
@media (min-width: 1200px) {

    /* General Styles */
    .h2-heading {
        width: 50%;
    }

    /* end of general styles */


    /* Header */
    .header .header-content {
        padding-top: 3rem;
        padding-bottom: 5rem;
    }

    .header .text-container {
        margin-top: 5.5rem;
        margin-right: 0.5rem;
    }

    .header .image-container {
        margin-top: 1rem;
        margin-left: 1.5rem;
    }


    .header-frame {
        height: 9.375rem;
    }

    /* end of header */


    /* Customer */
    .slider-1 .slider-container {
        margin-right: 3rem;
        margin-left: 3rem;
    }

    /* end of customer */


    /* Description */
    .cards-1 .card {
        width: 18.875rem;
        margin-right: 2rem;
        margin-left: 2rem;
    }

    .cards-1 .card-image {
        width: 12.5rem;
    }

    /* end of description */


    /* Features */
    .tabs .image-container {
        margin-right: 1.5rem;
        margin-left: 1rem;
    }

    .tabs .text-container {
        margin-top: 1.5rem;
        margin-right: 1rem;
        margin-left: 1.5rem;
    }

    /* end of features */


    /* Details */
    .basic-1 .image-container {
        margin-right: 1rem;
        margin-left: 1.5rem;
    }

    .basic-1 .text-container {
        margin-top: 1rem;
        margin-right: 1.5rem;
        margin-left: 1rem;
    }

    .basic-1 h2 {
        margin-bottom: 1rem;
    }

    /* end of details */


    /* Pricing */
    .cards-2 .card {
        width: 19.375rem;
        max-width: 100%;
        margin-right: 1.75rem;
        margin-left: 1.75rem;
    }

    .cards-2 .card .card-body {
        padding-right: 2.25rem;
        padding-left: 2.25rem;
    }

    /* end of pricing */


    /* Testimonials */
    .slider-2 .slider-container {
        width: 64.125rem;
        margin-right: auto;
        margin-left: auto;
    }

    /* end of testimonials */

    /* Footer */
    .footer .footer-col.first {
        margin-right: 1.5rem;
    }

    .footer .footer-col.middle {
        margin-right: 0.75rem;
        margin-left: 0.75rem;
    }

    .footer .footer-col.last {
        margin-left: 1.5rem;
    }

    /* end of footer */


    /* Extra Pages */
    .ex-header h1 {
        width: 60%;
        margin-right: auto;
        margin-left: auto;
    }

    .ex-basic-2 .form-container {
        margin-left: 1.75rem;
    }

    .ex-basic-2 .image-container-small {
        margin-left: 1.75rem;
    }

    /* end of extra pages */
}

/* end of min-width width 1200px */
</style>

<style lang="scss">
.p-link,
.p-carousel-indicators {
    display: none;
}
</style>