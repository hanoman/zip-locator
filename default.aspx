<%@ Page Language="C#" MasterPageFile="~/Library/MasterPages/Global960SeasonalHeader.Master" AutoEventWireup="true" Title="Zip Locator" %>

<%@ MasterType VirtualPath="~/Library/MasterPages/Global960SeasonalHeader.Master" %>
<%@ Register Src="/Library/Controls/OASSetupScript.ascx" TagName="OASSetupScript" TagPrefix="ucOAS" %>
<%@ Register Src="~/Library/Controls/BreadCrumb.ascx" TagName="BreadCrumb" TagPrefix="uc3" %>

<asp:Content ID="HeaderContent" ContentPlaceHolderID="HeaderContentHolder" runat="server">
    <%--Meta Information--%>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
	<%--FB Image--%>
	<link rel="image_src" href="/InClubsNow/Media/images/facebook-thumbnail.jpg" />
	<%--CSS--%>
    <link rel="stylesheet" href="Media/css/styles.css">
    <!--[if IE]>
        <link rel="stylesheet" href="Media/css/ie.css">
    <![endif]-->

	<%--Javascript--%>
    <script type="text/javascript" src="Media/script/event-locator.js"></script>
    <script type="text/javascript" src="Media/script/init.js"></script>


</asp:Content>



<%--SITEMAP--%>
<asp:Content ID="SiteMapContent" ContentPlaceHolderID="CenterHeaderContent" runat="server"></asp:Content>

<%----CONTENT----%>
<asp:Content ID="MainContent" ContentPlaceHolderID="MasterContentHolder" runat="server">
    <asp:ScriptManager ID="smScriptManager" runat="server" />
    <div id="TRM_Content">
        <!-- <div id='preloader'>
            <img src="/Global/images/ajaxLoaders/Sams-Standard-Chasing-Circle.gif">
        </div> -->
        <div class="grid_10 floatLeft" id="hiddenValley">

            <div class="main-content">
                <div class="zip-wrapper">
                    <div class="zip-prod regular">
                        <img src="media/images/prod-ranch-reg.png" alt="Hidden Valley Original Ranch">
                        <div class="zip-mod">
                            <h3 class="img-replace">Find Hidden Valley&reg; Original Ranch&reg; at your local Sam’s Club&reg;.</h3>
                            <div class="zipInput" id="inputOriginal"><input type="text" name="ZipCode" placeholder=""></div>
                            <a class="img-replace findClubBTN cTrack" id="originalFindClubBTN" iTrack="ZipLocatorMod_Submit_OriginalRanch" href="" title="Find a Club">Go</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</asp:Content>