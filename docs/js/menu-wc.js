'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">App</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6cb5f5bfb0ca4d5d38b589f85d96e58c"' : 'data-target="#xs-components-links-module-AppModule-6cb5f5bfb0ca4d5d38b589f85d96e58c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6cb5f5bfb0ca4d5d38b589f85d96e58c"' :
                                            'id="xs-components-links-module-AppModule-6cb5f5bfb0ca4d5d38b589f85d96e58c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CharactersModule.html" data-type="entity-link">CharactersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CharactersModule-1cbe11ee32dbcef2276de471ff30041d"' : 'data-target="#xs-components-links-module-CharactersModule-1cbe11ee32dbcef2276de471ff30041d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CharactersModule-1cbe11ee32dbcef2276de471ff30041d"' :
                                            'id="xs-components-links-module-CharactersModule-1cbe11ee32dbcef2276de471ff30041d"' }>
                                            <li class="link">
                                                <a href="components/CharactersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CharactersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CharactersRoutingModule.html" data-type="entity-link">CharactersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComicsModule.html" data-type="entity-link">ComicsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComicsModule-2ceb69759e92377540c171052dec71ce"' : 'data-target="#xs-components-links-module-ComicsModule-2ceb69759e92377540c171052dec71ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComicsModule-2ceb69759e92377540c171052dec71ce"' :
                                            'id="xs-components-links-module-ComicsModule-2ceb69759e92377540c171052dec71ce"' }>
                                            <li class="link">
                                                <a href="components/ComicsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComicsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComicsRoutingModule.html" data-type="entity-link">ComicsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CreatorsModule.html" data-type="entity-link">CreatorsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreatorsModule-08a232cdd1a598da2df7163378bced5e"' : 'data-target="#xs-components-links-module-CreatorsModule-08a232cdd1a598da2df7163378bced5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreatorsModule-08a232cdd1a598da2df7163378bced5e"' :
                                            'id="xs-components-links-module-CreatorsModule-08a232cdd1a598da2df7163378bced5e"' }>
                                            <li class="link">
                                                <a href="components/CreatorsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreatorsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreatorsRoutingModule.html" data-type="entity-link">CreatorsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DetailRecordModule.html" data-type="entity-link">DetailRecordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailRecordModule-ad3fc198c092376eec8dd26fd4396502"' : 'data-target="#xs-components-links-module-DetailRecordModule-ad3fc198c092376eec8dd26fd4396502"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailRecordModule-ad3fc198c092376eec8dd26fd4396502"' :
                                            'id="xs-components-links-module-DetailRecordModule-ad3fc198c092376eec8dd26fd4396502"' }>
                                            <li class="link">
                                                <a href="components/DetailRecordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailRecordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GridRecordsModule.html" data-type="entity-link">GridRecordsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GridRecordsModule-cf1852676e66ccb79823c8c7b81ee06a"' : 'data-target="#xs-components-links-module-GridRecordsModule-cf1852676e66ccb79823c8c7b81ee06a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GridRecordsModule-cf1852676e66ccb79823c8c7b81ee06a"' :
                                            'id="xs-components-links-module-GridRecordsModule-cf1852676e66ccb79823c8c7b81ee06a"' }>
                                            <li class="link">
                                                <a href="components/GridRecordsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridRecordsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-dc1835460655aebb9ee9f98805a44d3e"' : 'data-target="#xs-components-links-module-HomeModule-dc1835460655aebb9ee9f98805a44d3e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-dc1835460655aebb9ee9f98805a44d3e"' :
                                            'id="xs-components-links-module-HomeModule-dc1835460655aebb9ee9f98805a44d3e"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SeriesModule.html" data-type="entity-link">SeriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SeriesModule-692bb644b2515599bb546cc7c29a296a"' : 'data-target="#xs-components-links-module-SeriesModule-692bb644b2515599bb546cc7c29a296a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SeriesModule-692bb644b2515599bb546cc7c29a296a"' :
                                            'id="xs-components-links-module-SeriesModule-692bb644b2515599bb546cc7c29a296a"' }>
                                            <li class="link">
                                                <a href="components/SeriesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeriesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeriesRoutingModule.html" data-type="entity-link">SeriesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarModule.html" data-type="entity-link">SidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidebarModule-0f4be5af1339b3d7c0bea89a31a9bf2b"' : 'data-target="#xs-components-links-module-SidebarModule-0f4be5af1339b3d7c0bea89a31a9bf2b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-0f4be5af1339b3d7c0bea89a31a9bf2b"' :
                                            'id="xs-components-links-module-SidebarModule-0f4be5af1339b3d7c0bea89a31a9bf2b"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarRoutingModule.html" data-type="entity-link">SidebarRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CharactersService.html" data-type="entity-link">CharactersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComicsService.html" data-type="entity-link">ComicsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreatorsService.html" data-type="entity-link">CreatorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link">HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeriesService.html" data-type="entity-link">SeriesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});