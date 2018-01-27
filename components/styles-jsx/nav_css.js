const NavCss = () => (
    <style jsx>{`
    .pull-right{
        float:right;
      }
      .bg-dark {
        background-color: #343a40 !important;
      }
      .bg-white {
        background-color: #fff !important;
      }
    }
    .row-nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        max-width:100%;
        margin-right: -15px;
        margin-left: -15px;
        floal:right;
    }
   #search {
    float: right;
    margin-top: 4.5px;
    margin-bottom: 4.5px;
    width: 250px;
}

.search {
    padding-top: 5px;
    padding-bottom: 5px;
    width: 230px;
    height: 30px;
    position: relative;
    left: 10px;
    float: right;
    line-height: 22px;
    margin-bottom:5px;
}
button{

}
    .search input {
        position: absolute;
        width:0px;
        background-color :#343a40;
        margin-left: 72px;
        -webkit-transition: all 0.7s ease-in-out;
        -moz-transition: all 0.7s ease-in-out;
        -o-transition: all 0.7s ease-in-out;
        transition: all 0.7s ease-in-out;
        height: 22px;
        bottom:2px;
        padding: 0 2px 0 4px;

    }

        .search:hover input, .search input:focus {
            width: 300px;
            background-color :white;
            margin-right: 0px;
            line-height: 18px;
            border-radius:1px;
        }

.btn-search {
    background:url('static/images/search-ico.png') center center no-repeat;
    background-color :#343a40;
    max-height:25px;
    position: absolute;
    left: 0;
    bottom: 1.5px;
    border-color:black;
}
.nav-item{
  max-height:25px;
  bottom: 1.5px;
  background:transparent;
  position: relative;
  float:right;
}
  
  .btn-search:hover{
     background:url('static/images/search-ico.png') center center no-repeat;
     background-color:#27659d;

  }

.navbar {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.navbar > .container-nav, {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: right;
  -ms-flex-align: right;
  align-items: right;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-brand:hover, .navbar-brand:focus {
  text-decoration: none;
}

.navbar-nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navbar-dark .navbar-brand {
  color: #fff;
}

.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}

.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

    
    `}</style>
)
export default NavCss 