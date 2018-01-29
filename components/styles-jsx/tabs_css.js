export default ()=>(
     <style jsx>{`
        nav {
        color: #fff;
        background-color:;
        width: 100%;
        height: 56px;
        line-height: 56px;
        }

        nav.nav-extended {
        height: auto;
        }
        nav.nav-extended .nav-content {
        position: relative;
        line-height: normal;
        }
        nav a {
        color: black;
        }
        nav .tab .brand-logo {
        position:relative;
        margin:5px,2px,5px,30px;
        }

        nav .brand-logo.center {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        }

        @media only screen and (max-width: 992px) {
            nav .brand-logo {
                margin: 3px 0px 0px 5px;
            }
            nav .brand-logo.left, nav .brand-logo.right {
            padding: 0;
            -webkit-transform: none;
            transform: none;
            }
            nav .brand-logo.left {
            left: 0.5rem;
            }
            nav .brand-logo.right {
            right: 0.5rem;
            left: auto;
            }
            
        }

        nav .brand-logo.right {
        right: 0.5rem;
        padding: 0;
        }

        nav .brand-logo i,
        nav .brand-logo [class^="mdi-"], nav .brand-logo [class*="mdi-"],
        nav .brand-logo i.material-icons {
        float: left;
        margin-right: 15px;
        }

        nav .nav-title {
        display: inline-block;
        font-size: 32px;
        padding: 28px 0;
        }

        nav ul {
        margin: 0;
        }

        nav ul li {
        -webkit-transition: background-color .3s;
        transition: background-color .3s;
        float: left;
        padding: 0;
        }

        nav ul li.active {
        background-color: rgba(0, 0, 0, 0.1);
        }

        nav ul a {
        -webkit-transition: background-color .3s;
        transition: background-color .3s;
        font-size: 1rem;
        color: #fff;
        display: block;
        padding: 0 15px;
        cursor: pointer;
        }

        nav ul a.btn, nav ul a.btn-large, nav ul a.btn-large, nav ul a.btn-flat, nav ul a.btn-floating {
        margin-top: -2px;
        margin-left: 15px;
        margin-right: 15px;
        }

        nav ul a.btn > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-flat > .material-icons, nav ul a.btn-floating > .material-icons {
        height: inherit;
        line-height: inherit;
        }

        nav ul a:hover {
        background-color: rgba(0, 0, 0, 0.1);
        }

        nav ul.left {
        float: left;
        }
 
        .tabs {
            position: relative;
            overflow-x: auto;
            overflow-y: hidden;
            height: 48px;
            width: 100%;
            background-color: #fff;
            margin: 0 auto;
            white-space: nowrap;
            }

            .tabs.tabs-transparent {
            background-color: transparent;
            }

            .tabs.tabs-transparent .tab a,
            .tabs.tabs-transparent .tab.disabled a,
            .tabs.tabs-transparent .tab.disabled a:hover {
            color: rgba(255, 255, 255, 0.7);
            }

            .tabs.tabs-transparent .tab a:hover,
            .tabs.tabs-transparent .tab a.active {
            color: #fff;
            }
            .tabs .tab {
                display: inline-block;
                text-align: center;
                line-height: 48px;
                height: 48px;
                padding: 0px;
                margin: 0;
                text-transform: uppercase;
            }

            .tabs .tab a {
                color: black;
                display: block;
                width: 100%;
                height: 100%;
                font-size:15em;
                font-size: 14px;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-transition: color .28s ease;
                transition: color .28s ease;
            }

            .tabs .tab a:hover, .tabs .tab a.active {
                background-color: transparent;
                color: #ee6e73;
            }

            .tabs .tab.disabled a,
            .tabs .tab.disabled a:hover {
                color: rgba(238, 110, 115, 0.7);
                cursor: default;
            }

        }
    `}</style>
)