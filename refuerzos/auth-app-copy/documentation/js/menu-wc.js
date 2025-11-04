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
                    <a href="index.html" data-type="index-link">auth-app documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AccountModule-c92d9a06136586784c65e71e813653ab10e5ad0d551bbbc22330924b7c5c256434906f1b2db717d45f6bc41448c28e40eb427e7b0f559246538a807e0437dc1c"' : 'data-bs-target="#xs-controllers-links-module-AccountModule-c92d9a06136586784c65e71e813653ab10e5ad0d551bbbc22330924b7c5c256434906f1b2db717d45f6bc41448c28e40eb427e7b0f559246538a807e0437dc1c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountModule-c92d9a06136586784c65e71e813653ab10e5ad0d551bbbc22330924b7c5c256434906f1b2db717d45f6bc41448c28e40eb427e7b0f559246538a807e0437dc1c"' :
                                            'id="xs-controllers-links-module-AccountModule-c92d9a06136586784c65e71e813653ab10e5ad0d551bbbc22330924b7c5c256434906f1b2db717d45f6bc41448c28e40eb427e7b0f559246538a807e0437dc1c"' }>
                                            <li class="link">
                                                <a href="controllers/AccountController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AccountModule-c92d9a06136586784c65e71e813653ab10e5ad0d551bbbc22330924b7c5c256434906f1b2db717d45f6bc41448c28e40eb427e7b0f559246538a807e0437dc1c"' : 'data-bs-target="#xs-injectables-links-module-AccountModule-c92d9a06136586784c65e71e813653ab10e5ad0d551bbbc22330924b7c5c256434906f1b2db717d45f6bc41448c28e40eb427e7b0f559246538a807e0437dc1c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountModule-c92d9a06136586784c65e71e813653ab10e5ad0d551bbbc22330924b7c5c256434906f1b2db717d45f6bc41448c28e40eb427e7b0f559246538a807e0437dc1c"' :
                                        'id="xs-injectables-links-module-AccountModule-c92d9a06136586784c65e71e813653ab10e5ad0d551bbbc22330924b7c5c256434906f1b2db717d45f6bc41448c28e40eb427e7b0f559246538a807e0437dc1c"' }>
                                        <li class="link">
                                            <a href="injectables/AccountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-2e871f5206ebc5d272cdc1234681365c6f1492f6d7f1612328937a8e5f04d508c8b48e85895fae9be473d89a7f166fc32b080b60a7c4ef1ccfdb6ff04fdc0b0c"' : 'data-bs-target="#xs-controllers-links-module-AppModule-2e871f5206ebc5d272cdc1234681365c6f1492f6d7f1612328937a8e5f04d508c8b48e85895fae9be473d89a7f166fc32b080b60a7c4ef1ccfdb6ff04fdc0b0c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2e871f5206ebc5d272cdc1234681365c6f1492f6d7f1612328937a8e5f04d508c8b48e85895fae9be473d89a7f166fc32b080b60a7c4ef1ccfdb6ff04fdc0b0c"' :
                                            'id="xs-controllers-links-module-AppModule-2e871f5206ebc5d272cdc1234681365c6f1492f6d7f1612328937a8e5f04d508c8b48e85895fae9be473d89a7f166fc32b080b60a7c4ef1ccfdb6ff04fdc0b0c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2e871f5206ebc5d272cdc1234681365c6f1492f6d7f1612328937a8e5f04d508c8b48e85895fae9be473d89a7f166fc32b080b60a7c4ef1ccfdb6ff04fdc0b0c"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2e871f5206ebc5d272cdc1234681365c6f1492f6d7f1612328937a8e5f04d508c8b48e85895fae9be473d89a7f166fc32b080b60a7c4ef1ccfdb6ff04fdc0b0c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2e871f5206ebc5d272cdc1234681365c6f1492f6d7f1612328937a8e5f04d508c8b48e85895fae9be473d89a7f166fc32b080b60a7c4ef1ccfdb6ff04fdc0b0c"' :
                                        'id="xs-injectables-links-module-AppModule-2e871f5206ebc5d272cdc1234681365c6f1492f6d7f1612328937a8e5f04d508c8b48e85895fae9be473d89a7f166fc32b080b60a7c4ef1ccfdb6ff04fdc0b0c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-3fe71846dfdfacc34d4f06db51af47c713ace5f35ba50f72c165362b1812f32ddbe398c12f4dbbefcb8c92832cb6acd6f283632873b5b85c4f8cdd00555885ab"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-3fe71846dfdfacc34d4f06db51af47c713ace5f35ba50f72c165362b1812f32ddbe398c12f4dbbefcb8c92832cb6acd6f283632873b5b85c4f8cdd00555885ab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-3fe71846dfdfacc34d4f06db51af47c713ace5f35ba50f72c165362b1812f32ddbe398c12f4dbbefcb8c92832cb6acd6f283632873b5b85c4f8cdd00555885ab"' :
                                            'id="xs-controllers-links-module-AuthModule-3fe71846dfdfacc34d4f06db51af47c713ace5f35ba50f72c165362b1812f32ddbe398c12f4dbbefcb8c92832cb6acd6f283632873b5b85c4f8cdd00555885ab"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-3fe71846dfdfacc34d4f06db51af47c713ace5f35ba50f72c165362b1812f32ddbe398c12f4dbbefcb8c92832cb6acd6f283632873b5b85c4f8cdd00555885ab"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-3fe71846dfdfacc34d4f06db51af47c713ace5f35ba50f72c165362b1812f32ddbe398c12f4dbbefcb8c92832cb6acd6f283632873b5b85c4f8cdd00555885ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-3fe71846dfdfacc34d4f06db51af47c713ace5f35ba50f72c165362b1812f32ddbe398c12f4dbbefcb8c92832cb6acd6f283632873b5b85c4f8cdd00555885ab"' :
                                        'id="xs-injectables-links-module-AuthModule-3fe71846dfdfacc34d4f06db51af47c713ace5f35ba50f72c165362b1812f32ddbe398c12f4dbbefcb8c92832cb6acd6f283632873b5b85c4f8cdd00555885ab"' }>
                                        <li class="link">
                                            <a href="injectables/AesStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AesStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtATStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtATStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtRTStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtRTStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SaltStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaltStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryModule-3b60766843eed5f0e50503d27d2291ffaa7949e0db561e46c0f5aea5564a682af363def1be9242e3d5a33e38a78d55fbf97916d0448fef93143d64aafc80e50a"' : 'data-bs-target="#xs-controllers-links-module-CategoryModule-3b60766843eed5f0e50503d27d2291ffaa7949e0db561e46c0f5aea5564a682af363def1be9242e3d5a33e38a78d55fbf97916d0448fef93143d64aafc80e50a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-3b60766843eed5f0e50503d27d2291ffaa7949e0db561e46c0f5aea5564a682af363def1be9242e3d5a33e38a78d55fbf97916d0448fef93143d64aafc80e50a"' :
                                            'id="xs-controllers-links-module-CategoryModule-3b60766843eed5f0e50503d27d2291ffaa7949e0db561e46c0f5aea5564a682af363def1be9242e3d5a33e38a78d55fbf97916d0448fef93143d64aafc80e50a"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryModule-3b60766843eed5f0e50503d27d2291ffaa7949e0db561e46c0f5aea5564a682af363def1be9242e3d5a33e38a78d55fbf97916d0448fef93143d64aafc80e50a"' : 'data-bs-target="#xs-injectables-links-module-CategoryModule-3b60766843eed5f0e50503d27d2291ffaa7949e0db561e46c0f5aea5564a682af363def1be9242e3d5a33e38a78d55fbf97916d0448fef93143d64aafc80e50a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-3b60766843eed5f0e50503d27d2291ffaa7949e0db561e46c0f5aea5564a682af363def1be9242e3d5a33e38a78d55fbf97916d0448fef93143d64aafc80e50a"' :
                                        'id="xs-injectables-links-module-CategoryModule-3b60766843eed5f0e50503d27d2291ffaa7949e0db561e46c0f5aea5564a682af363def1be9242e3d5a33e38a78d55fbf97916d0448fef93143d64aafc80e50a"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagModule.html" data-type="entity-link" >TagModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagModule-2fbd332262223c1d7ee020dbea53049648594be56caf8c32dc8452f3c7f719eac1a1f8f36a83653a1ab0e2fb6c868220aa7f06c56583b55f047f2712b8b80a71"' : 'data-bs-target="#xs-controllers-links-module-TagModule-2fbd332262223c1d7ee020dbea53049648594be56caf8c32dc8452f3c7f719eac1a1f8f36a83653a1ab0e2fb6c868220aa7f06c56583b55f047f2712b8b80a71"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagModule-2fbd332262223c1d7ee020dbea53049648594be56caf8c32dc8452f3c7f719eac1a1f8f36a83653a1ab0e2fb6c868220aa7f06c56583b55f047f2712b8b80a71"' :
                                            'id="xs-controllers-links-module-TagModule-2fbd332262223c1d7ee020dbea53049648594be56caf8c32dc8452f3c7f719eac1a1f8f36a83653a1ab0e2fb6c868220aa7f06c56583b55f047f2712b8b80a71"' }>
                                            <li class="link">
                                                <a href="controllers/TagController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagModule-2fbd332262223c1d7ee020dbea53049648594be56caf8c32dc8452f3c7f719eac1a1f8f36a83653a1ab0e2fb6c868220aa7f06c56583b55f047f2712b8b80a71"' : 'data-bs-target="#xs-injectables-links-module-TagModule-2fbd332262223c1d7ee020dbea53049648594be56caf8c32dc8452f3c7f719eac1a1f8f36a83653a1ab0e2fb6c868220aa7f06c56583b55f047f2712b8b80a71"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagModule-2fbd332262223c1d7ee020dbea53049648594be56caf8c32dc8452f3c7f719eac1a1f8f36a83653a1ab0e2fb6c868220aa7f06c56583b55f047f2712b8b80a71"' :
                                        'id="xs-injectables-links-module-TagModule-2fbd332262223c1d7ee020dbea53049648594be56caf8c32dc8452f3c7f719eac1a1f8f36a83653a1ab0e2fb6c868220aa7f06c56583b55f047f2712b8b80a71"' }>
                                        <li class="link">
                                            <a href="injectables/TagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionModule.html" data-type="entity-link" >TransactionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TransactionModule-5333ff36b201cfda750b05659dabc31a5a202763249ec64283be8f6fe10704c2a8600abd6dca477e9c48647a74c5ccb74b95882c063d93b9d0e37949ff0d842b"' : 'data-bs-target="#xs-controllers-links-module-TransactionModule-5333ff36b201cfda750b05659dabc31a5a202763249ec64283be8f6fe10704c2a8600abd6dca477e9c48647a74c5ccb74b95882c063d93b9d0e37949ff0d842b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TransactionModule-5333ff36b201cfda750b05659dabc31a5a202763249ec64283be8f6fe10704c2a8600abd6dca477e9c48647a74c5ccb74b95882c063d93b9d0e37949ff0d842b"' :
                                            'id="xs-controllers-links-module-TransactionModule-5333ff36b201cfda750b05659dabc31a5a202763249ec64283be8f6fe10704c2a8600abd6dca477e9c48647a74c5ccb74b95882c063d93b9d0e37949ff0d842b"' }>
                                            <li class="link">
                                                <a href="controllers/TransactionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TransactionModule-5333ff36b201cfda750b05659dabc31a5a202763249ec64283be8f6fe10704c2a8600abd6dca477e9c48647a74c5ccb74b95882c063d93b9d0e37949ff0d842b"' : 'data-bs-target="#xs-injectables-links-module-TransactionModule-5333ff36b201cfda750b05659dabc31a5a202763249ec64283be8f6fe10704c2a8600abd6dca477e9c48647a74c5ccb74b95882c063d93b9d0e37949ff0d842b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TransactionModule-5333ff36b201cfda750b05659dabc31a5a202763249ec64283be8f6fe10704c2a8600abd6dca477e9c48647a74c5ccb74b95882c063d93b9d0e37949ff0d842b"' :
                                        'id="xs-injectables-links-module-TransactionModule-5333ff36b201cfda750b05659dabc31a5a202763249ec64283be8f6fe10704c2a8600abd6dca477e9c48647a74c5ccb74b95882c063d93b9d0e37949ff0d842b"' }>
                                        <li class="link">
                                            <a href="injectables/TransactionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-e2c89e9f1a6d03aaf83a031e0c769db4dfaa8da362635f16c88b73365232b2c9835b2b2398c62aefa6279b99b229050604b7dd3ecfdafd5eaa0ee7ff40b2e194"' : 'data-bs-target="#xs-controllers-links-module-UserModule-e2c89e9f1a6d03aaf83a031e0c769db4dfaa8da362635f16c88b73365232b2c9835b2b2398c62aefa6279b99b229050604b7dd3ecfdafd5eaa0ee7ff40b2e194"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-e2c89e9f1a6d03aaf83a031e0c769db4dfaa8da362635f16c88b73365232b2c9835b2b2398c62aefa6279b99b229050604b7dd3ecfdafd5eaa0ee7ff40b2e194"' :
                                            'id="xs-controllers-links-module-UserModule-e2c89e9f1a6d03aaf83a031e0c769db4dfaa8da362635f16c88b73365232b2c9835b2b2398c62aefa6279b99b229050604b7dd3ecfdafd5eaa0ee7ff40b2e194"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-e2c89e9f1a6d03aaf83a031e0c769db4dfaa8da362635f16c88b73365232b2c9835b2b2398c62aefa6279b99b229050604b7dd3ecfdafd5eaa0ee7ff40b2e194"' : 'data-bs-target="#xs-injectables-links-module-UserModule-e2c89e9f1a6d03aaf83a031e0c769db4dfaa8da362635f16c88b73365232b2c9835b2b2398c62aefa6279b99b229050604b7dd3ecfdafd5eaa0ee7ff40b2e194"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-e2c89e9f1a6d03aaf83a031e0c769db4dfaa8da362635f16c88b73365232b2c9835b2b2398c62aefa6279b99b229050604b7dd3ecfdafd5eaa0ee7ff40b2e194"' :
                                        'id="xs-injectables-links-module-UserModule-e2c89e9f1a6d03aaf83a031e0c769db4dfaa8da362635f16c88b73365232b2c9835b2b2398c62aefa6279b99b229050604b7dd3ecfdafd5eaa0ee7ff40b2e194"' }>
                                        <li class="link">
                                            <a href="injectables/UserRepositoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepositoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AccountController.html" data-type="entity-link" >AccountController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagController.html" data-type="entity-link" >TagController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TransactionController.html" data-type="entity-link" >TransactionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Account.html" data-type="entity-link" >Account</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Category.html" data-type="entity-link" >Category</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Transaction.html" data-type="entity-link" >Transaction</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseDocumentation.html" data-type="entity-link" >BaseDocumentation</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccountDto.html" data-type="entity-link" >CreateAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransactionDto.html" data-type="entity-link" >CreateTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefaultResponse.html" data-type="entity-link" >DefaultResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefaultSuccessResponse.html" data-type="entity-link" >DefaultSuccessResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserDto.html" data-type="entity-link" >GetUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SwaggerDocumentation.html" data-type="entity-link" >SwaggerDocumentation</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAccountDto.html" data-type="entity-link" >UpdateAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTagDto.html" data-type="entity-link" >UpdateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTransactionDto.html" data-type="entity-link" >UpdateTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AesStrategy.html" data-type="entity-link" >AesStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtATStrategy.html" data-type="entity-link" >JwtATStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtProvider.html" data-type="entity-link" >JwtProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRTStrategy.html" data-type="entity-link" >JwtRTStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SaltStrategy.html" data-type="entity-link" >SaltStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagService.html" data-type="entity-link" >TagService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransactionService.html" data-type="entity-link" >TransactionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepositoryService.html" data-type="entity-link" >UserRepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IDefaultResponse.html" data-type="entity-link" >IDefaultResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDocumentation.html" data-type="entity-link" >IDocumentation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISuccessResponse.html" data-type="entity-link" >ISuccessResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});