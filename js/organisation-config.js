// Plaats dit bestand op een centrale locatie voor hergebruik in meerdere documenten.
var organisationConfig = {
    nl_organisationName: "WetsTaal",
    nl_organisationStylesURL: "https://gitdocumentatie.logius.nl/publicatie/respec/style/",
    nl_organisationPublishURL: "https://okubbe.github.io/wetstaal_1_documentatie/",
    logos: [{
        src: "https://raw.githubusercontent.com/MinBZK/wetstaal/main/media/logo150.gif",
        alt: "WetsTaal",
        id: "WetsTaal",
        height: 100,
        width: 100,
        url: "https://github.com/MinBZK/wetstaal",
    }],

    postProcess: [window.respecMermaid.createFigures],

    latestVersion: ["nl_organisationPublishURL", "v", "publishVersion"],
    thisVersion: ["nl_organisationPublishURL", "v", "publishVersion"],
    prevVersion: ["nl_organisationPublishURL", "v", "previousVersion"],
    useLogo: true,
    useLabel: true,

    license: "cc0",
    addSectionLinks: true,

    localizationStrings: {
        en: {
            wv: "Draft",
            cv: "Recommendation",
            vv: "Proposed recommendation",
            def: "Definitive version",
            basis: "Document",
            eo: "Outdated version",
            tg: "Rescinded version",
            no: "Norm",
            st: "Standard",
            im: "Information model",
            pr: "Guideline",
            hr: "Guide",
            wa: "Proposed recommendation",
            al: "General",
            bd: "Governance documentation",
            bp: "Best practice",
        },
        nl: {
            wv: "Werkversie",
            cv: "Consultatieversie",
            vv: "Versie ter vaststelling",
            def: "Vastgestelde versie",
            basis: "Document",
            eo: "Verouderde versie",
            tg: "Teruggetrokken versie",
            no: "Norm",
            st: "Standaard",
            im: "Informatiemodel",
            pr: "Praktijkrichtlijn",
            hr: "Handreiking",
            wa: "Werkafspraak",
            al: "Algemeen",
            bd: "Beheerdocumentatie",
            bp: "Best practice",
        },
    },

    sotdText: {
        nl: {
            sotd: "Status van dit document",
            def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door het TO goedgekeurde consultatieversie.`,
            cv: `Dit is een door het TO goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar `,
            vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            basis: "Dit is een document zonder officiële status.",
        },
        en: {
            sotd: "Status of This Document",
            def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
            wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by TO.`,
            cv: `This is a proposed recommendation approved by TO. Comments regarding this document may be sent to `,
            vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
            basis: "This document has no official standing.",
        },
    },

    labelColor: {
        def: "#154273",
        wv: "#32a852",
    },
    licenses: {
        cc0: {
            name: "Creative Commons 0 Public Domain Dedication",
            short: "CC0",
            url: "https://creativecommons.org/publicdomain/zero/1.0/",
            image: "https://tools.geostandaarden.nl/respec/style/logos/CC-Licentie.svg",
        },
        "cc-by": {
            name: "Creative Commons Attribution 4.0 International Public License",
            short: "CC-BY",
            url: "https://creativecommons.org/licenses/by/4.0/legalcode",
            image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by.svg",
        },
        "cc-by-nd": {
            name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
            short: "CC-BY-ND",
            url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
            image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by-nd.svg",
        },
    },

    localBiblio: {
        "SemVer": {
            href: "https://semver.org",
            title: "Semantic Versioning 2.0.0",
            authors: ["T. Preston-Werner"],
            date: "June 2013"
        },
        "1ekamerregelspraak": {
            href: "https://www.eerstekamer.nl/overig/20211012/voorbeeld_van_een_regelspraak/document3/f=/vlmsm1wog7lk.pdf",
            title: "Voorbeeld van een Regelspraak-regel",
            authors: "M. Lokin",
            date: "Oktober 2021"
        },
        "HandleidingWetsanalyse": {
            href: "https://wendbarewetsuitvoering.pleio.nl/cms/view/41f08520-3910-4691-a982-f355e199f011/handleiding-wetsanalyse-in-de-praktijk",
            title: "Handleiding Wetsanalyse in de praktijk",
            authors: "BRM",
            date: "9 februari 2023"
        }, 
        "Wetsanalyse": {
            href: "https://www.boom.nl/zoeken/100-11574_Wetsanalyse",
            title: "Wetsanalyse voor een werkbare uitvoering van wetgeving met ICT",
            authors: "Ausems A, Bulles J en Lokin M",
            date: "Juni 2021"
        }, 
        "StaatVanDeUitvoering": {
            href: "https://www.rijksoverheid.nl/documenten/kamerstukken/2023/01/18/bijlage-3-staat-van-de-uitvoering-2022",
            title: "Staat van de Uitvoering 2022",
            authors: "Staat van de uitvoering",
            date: "Januari 2023"
        }, 
    },
}
