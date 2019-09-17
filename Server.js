var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname));

var cors = require('cors');

app.use(cors());
var HomePageData=require("./data/HomePageData.json");
var BlogGridData = require("./data/BlogGridData.json");
var BlogPostContentData= require("./data/BlogPostContentData.json");
var BlogPostGridData = require("./data/BlogPostGridData.json");
var BrandLogoSliderData= require("./data/BrandLogoSliderData.json");
var FeatureIconData= require("./data/FeatureIconData.json");
var FunfactData= require("./data/FunfactData.json");
var HeroSliderOneData= require("./data/HeroSliderOneData.json");
var HeroSliderTwoData= require("./data/HeroSliderTwoData.json");
var PhotoGalleryData= require("./data/PhotoGalleryData.json");
var ProjectsData= require("./data/ProjectsData.json");
var ProjectSliderData= require("./data/ProjectSliderData.json");
var ProjectSliderTwoData= require("./data/ProjectSliderTwoData.json");
var ServiceGalleryData= require("./data/ServiceGalleryData.json");
var ServiceGridSliderData= require("./data/ServiceGridSliderData.json");
var ServicesData= require("./data/ServicesData.json");
var ServiceTabData= require("./data/ServiceTabData.json");
var SidebarData= require("./data/SidebarData.json");
var SidebarServiceData= require("./data/SidebarServiceData.json");
var TeamJobData= require("./data/TeamJobData.json");
var TeamMemberGridData= require("./data/TeamMemberGridData.json");
var TestimonialSliderData= require("./data/TestimonialSliderData.json");

app.get('/BlogGridData', function (req, res) {
    res.json(BlogGridData);
});

app.get('/BlogPostContentData', function (req, res) {
    res.json(BlogPostContentData);
});

app.get('/BlogPostGridData', function (req, res) {
    res.json(BlogPostGridData);
});

app.get('/BrandLogoSliderData', function (req, res) {
    res.json(BrandLogoSliderData);
});
app.get('/FeatureIconData', function (req, res) {
    res.json(FeatureIconData);
});
app.get('/FunfactData', function (req, res) {
    res.json(FunfactData);
});
app.get('/HeroSliderOneData', function (req, res) {
    res.json(HeroSliderOneData);
});
app.get('/HeroSliderTwoData', function (req, res) {
    res.json(HeroSliderTwoData);
});
app.get('/PhotoGalleryData', function (req, res) {
    res.json(PhotoGalleryData);
});
app.get('/ProjectsData', function (req, res) {
    res.json(ProjectsData);
});
app.get('/ProjectSliderData', function (req, res) {
    res.json(ProjectSliderData);
});
app.get('/ProjectSliderTwoData', function (req, res) {
    res.json(ProjectSliderTwoData);
});
app.get('/ServiceGalleryData', function (req, res) {
    res.json(ServiceGalleryData);
});
app.get('/ServiceGridSliderData', function (req, res) {
    res.json(ServiceGridSliderData);
});
app.get('/ServiceTabData', function (req, res) {
    res.json(ServiceTabData);
});
app.get('/ServicesData', function (req, res) {
    res.json(ServicesData);
});
app.get('/SidebarData', function (req, res) {
    res.json(SidebarData);
});
app.get('/SidebarServiceData', function (req, res) {
    res.json(SidebarServiceData);
});
app.get('/TeamJobData', function (req, res) {
    res.json(TeamJobData);
});
app.get('/TeamMemberGridData', function (req, res) {
    res.json(TeamMemberGridData);
});
app.get('/TestimonialSliderData', function (req, res) {
    res.json(TestimonialSliderData);
});
app.get('/HomePageData', function (req, res) {
    res.json(HomePageData);
});
app.listen(process.env.PORT);
console.log("Server On");
