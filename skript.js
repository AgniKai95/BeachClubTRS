var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlTutorial = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";
var urlFeedback = "https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_f26WHDvlOFNi_8Y43fECOdUMDVDTUpUUDRONkxHMzdLQ09WRlQxUUZSMS4u";
var urlMusik = "https://open.spotify.com/embed/playlist/1Zg1KOF4IWcZbTNXU1wEye?si=dfdde5b9a9444c36";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}


var zoneTutorial = "tutorial";
var zoneFeedback = "feedback";
var zoneMusik = "musik";

WA.room.onEnterZone(zoneTutorial, () => {
   currentPopup =  WA.ui.openPopup("popUpTutorial","Tutorial ansehen?",[
        {
            label: "OK",
            callback: (popup => {
                WA.nav.openTab(urlTutorial);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneTutorial, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneFeedback, () => {
   currentPopup =  WA.ui.openPopup("popUpFeedback","Hier kannst du Feedback abgeben.",[
        {
            label: "Feedback",
            callback: (popup => {
                WA.nav.openCoWebSite(urlFeedback);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneFeedback, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneMusik, () => {
   currentPopup =  WA.ui.openPopup("popUpMusik","Höre eure Lieblingslieder!",[
        {
            label: "Her damit!",
			callback: (popup => {
                WA.nav.openCoWebSite(urlMusik);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneMusik, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})
