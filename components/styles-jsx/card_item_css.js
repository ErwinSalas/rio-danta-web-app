
const ItemStyle = ()=>(
    <style jsx>{`

.black {
background-color: #000000 !important;
}
.no-pad-row{
    padding-top:30px;     
}
.no-pad-top{
  padding-top:20px;
}
.pad-5{
  padding:3px;
}
.no-pad-top-list{
  padding-top:5px;
}
.title-center{
  text-align:center;
}

.li-item {
    display: list-item;
    max-height:25px;
    text-align:center;
    text-align: -webkit-wrap-content;
}
.li-item-left{
    display: list-item;
    max-height:20px;
    text-align: -webkit-wrap-content;
    text-align:left;
}
  
.black-text-content {
  font-size:0.7em;
  padding:0;
  margin-top:2px;
  margin-bottom:2px;
  color: #000000 !important;
}
.black-text-content-title {
  font-size:0.8em;
  color:#89adca;
  padding:0;
  margin-top:2px;
  margin-bottom:2px;
}

.white {
  background-color: #FFFFFF !important;
}

.white-text {
  color: #FFFFFF !important;
}
.card-panel {
  -webkit-transition: -webkit-box-shadow .25s;
  transition: -webkit-box-shadow .25s;
  transition: box-shadow .25s;
  transition: box-shadow .25s, -webkit-box-shadow .25s;
  padding: 24px;
  margin: 0.5rem 0 1rem 0;
  border-radius: 2px;
  background-color: #fff;
}

.card {
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: rgba(255,255,255,0.15);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
  color: #fff;
  -webkit-transition: -webkit-box-shadow .25s;
  transition: -webkit-box-shadow .25s;
  transition: box-shadow .25s;
  transition: box-shadow .25s, -webkit-box-shadow .25s;
  border-radius: 2px;
}

.card .card-title {
  font-size: 24px;
  font-weight: 300;
}

.card .card-title.activator {
  cursor: pointer;
}

.card.small, .card.medium, .card.large {
  position: relative;
}

.card.small .card-image, .card.medium .card-image, .card.large .card-image {
  max-height: 60%;
  overflow: hidden;
}

.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {
  max-height: 40%;
}

.card.small .card-content, .card.medium .card-content, .card.large .card-content {
  max-height: 100%;
  overflow: hidden;
}

.card.small .card-action, .card.medium .card-action, .card.large .card-action {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.card.small {
  height: 300px;
}

.card.medium {
  height: 400px;
}

.card.large {
  height: 500px;
}

.card.horizontal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {
  height: 100%;
  max-height: none;
  overflow: visible;
}

.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {
  height: 100%;
}

.card.horizontal .card-image {
  max-width: 50%;
}

.card.horizontal .card-image img {
  border-radius: 2px 0 0 2px;
  max-width: 100%;
  width: auto;
}

.card.horizontal .card-stacked {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  position: relative;
}

.card.horizontal .card-stacked .card-content {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

.card.sticky-action .card-action {
  z-index: 2;
}

.card.sticky-action .card-reveal {
  z-index: 1;
  padding-bottom: 64px;
}

.card .card-image {
  position: relative;
}

.card .card-image img {
  display: block;
  border-radius: 2px 2px 0 0;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}
.p-absolute{
  position: absolute;
  z-index:2000;
  top: 5px;
  right:5px;

}

.card .card-image .card-title {
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 100%;
  padding: 24px;
}

.card .card-content {
  padding: 10px;
  vertical-align: middle;
  border-radius: 0 0 2px 2px;
}

.card .card-content p {
  text-align:left;
  font-size:1em;
  display: block;
  -webkit-font-smoothing: antialiased;
  color: inherit;
}

.card .card-content .card-title {
  display: block;
  line-height: 32px;
  margin-bottom: 8px;
}

.card .card-content .card-title i {
  line-height: 32px;
}

.card .card-action {
  position: relative;
  background-color: inherit;
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  padding: 6px 14px;
}

.card .card-action:last-child {
  border-radius: 0 0 2px 2px;
}

.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
  color: #ffab40;
  margin-right: 24px;
  -webkit-transition: color .3s ease;
  transition: color .3s ease;
  text-transform: uppercase;
}

.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
  color: #ffd8a6;
}

.card .card-reveal {
  padding: 24px;
  position: absolute;
  background-color: #fff;
  width: 100%;
  overflow-y: auto;
  left: 0;
  top: 100%;
  height: 100%;
  z-index: 3;
  display: none;
}

.card .card-reveal .card-title {
  cursor: pointer;
  display: block;
}
.z-depth-0 {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
}

.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-floating:hover {
  -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
          box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
}

.z-depth-2 {
  -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
}

.z-depth-3 {
  -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
          box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
}

.z-depth-4, .modal {
  -webkit-box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);
          box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);
}

.z-depth-5 {
  -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
          box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
}
@media only screen and (max-width: 600px) {
             .no-pad-top{
                padding-top:5px;
              }
              .no-pad-row{
                  padding-top:2px;     
              }
              .no-pad-top-list{
                padding-top:0px;
              }
              .pad-5{
                padding:1px;
                font-size:20px;
              }
  padding:3px;
}
          }
         
    `}</style>
)
export default ItemStyle;