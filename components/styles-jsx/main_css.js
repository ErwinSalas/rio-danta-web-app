export default () => (
    <style jsx global>{`
@import url("font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,400,400italic");

/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* Reset */

	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol, ul {
		list-style: none;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body {
		-webkit-text-size-adjust: none;
	}

/* Box Model */

	*, *:before, *:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

/* Containers */

	.container {
		margin-left: auto;
		margin-right: auto;
	}

	.container.percent-125 {
		width: 100%;
		max-width: 1700px;
		min-width: 1360px;
	}

	.container.percent-75 {
		width: 1020px;
	}

	.container.percent-50 {
		width: 680px;
	}

	.container.percent-25 {
		width: 340px;
	}

	.container {
		width: 1360px;
	}

	@media screen and (max-width: 1680px) {

		.container.percent-125 {
			width: 100%;
			max-width: 1500px;
			min-width: 1200px;
		}

		.container.percent-75 {
			width: 900px;
		}

		.container.percent-50 {
			width: 600px;
		}

		.container.percent-25 {
			width: 300px;
		}

		.container {
			width: 1200px;
		}

	}

	@media screen and (max-width: 1280px) {

		.container.percent-125 {
			width: 100%;
			max-width: 1200px;
			min-width: 960px;
		}

		.container.percent-75 {
			width: 720px;
		}

		.container.percent-50 {
			width: 480px;
		}

		.container.percent-25 {
			width: 240px;
		}

		.container {
			width: 960px;
		}

	}

	@media screen and (max-width: 1000px) {

		.container.percent-125 {
			width: 100%;
			max-width: 125%;
			min-width: 100%;
		}

		.container.percent-75 {
			width: 75%;
		}

		.container.percent-50 {
			width: 50%;
		}

		.container.percent-25 {
			width: 25%;
		}

		.container {
			width: 100% !important;
		}

	}

	@media screen and (max-width: 736px) {

		.container.percent-125 {
			width: 100%;
			max-width: 125%;
			min-width: 100%;
		}

		.container.percent-75 {
			width: 75%;
		}

		.container.percent-50 {
			width: 50%;
		}

		.container.percent-25 {
			width: 25%;
		}

		.container {
			width: 100% !important;
		}

	}
.btn-floating {
  display: inline-block;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  border-radius: 50%;
  -webkit-transition: .3s;
  transition: .3s;
  cursor: pointer;
  vertical-align: middle;
}
.color-prymary{
	background-color:#d2da2e;
}
.color-accent{
	background-color:  #145995;
}
.color-danton{
	background-color:#382b33;
}
.btn-floating:hover {
  background-color:#145995;
}

.btn-floating:before {
  border-radius: 0;
}
.btn-floating.btn-large {
  width: 56px;
  height: 56px;
}
.fixed-action-btn {
  position: fixed;
  right: 23px;
  bottom: 23px;
  padding-top: 15px;
  margin-bottom: 0;
  z-index: 997;
}
.fixed-action-btn ul {
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  bottom: 64px;
  margin: 0;
  visibility: hidden;
}

.fixed-action-btn ul li {
  margin-bottom: 15px;
}

.fixed-action-btn ul a.btn-floating {
  opacity: 0;
}

.fixed-action-btn .fab-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 40px;
  height: 40px;
  background-color: #26a69a;
  border-radius: 50%;
  -webkit-transform: scale(0);
          transform: scale(0);
}
.fixed-action-btn.horizontal {
  padding: 0 0 0 15px;
}

.fixed-action-btn.horizontal ul {
  text-align: right;
  right: 64px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  height: 100%;
  left: auto;
  width: 500px;
  /*width 100% only goes to width of button container */
}

.fixed-action-btn.horizontal ul li {
  display: inline-block;
  margin: 15px 15px 0 0;
}
.material-icons {
  text-rendering: optimizeLegibility;
  -webkit-font-feature-settings: 'liga';
     -moz-font-feature-settings: 'liga';
          font-feature-settings: 'liga';
}
i.large {
	padding:3px;
  font-size: 3rem;
}


/* Grid */

	.row {
		border-bottom: solid 1px transparent;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row > * {
		float: left;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row:after, .row:before {
		content: '';
		display: block;
		clear: both;
		height: 0;
	}

	.row.uniform > * > :first-child {
		margin-top: 0;
	}

	.row.uniform > * > :last-child {
		margin-bottom: 0;
	}

	.row.percent-0 > * {
		padding: 0px 0 0 0px;
	}

	.row.percent-0 {
		margin: 0px 0 -1px 0px;
	}

	.row.uniform.percent-0 > * {
		padding: 0px 0 0 0px;
	}

	.row.uniform.percent-0 {
		margin: 0px 0 -1px 0px;
	}

	.row > * {
		padding: 50px 0 0 50px;
	}

	.row {
		margin: -50px 0 -1px -50px;
	}

	.row.uniform > * {
		padding: 50px 0 0 50px;
	}

	.row.uniform {
		margin: -50px 0 -1px -50px;
	}

	.row.percent-200 > * {
		padding: 100px 0 0 100px;
	}

	.row.percent-200 {
		margin: -100px 0 -1px -100px;
	}

	.row.uniform.percent-200 > * {
		padding: 100px 0 0 100px;
	}

	.row.uniform.percent-200 {
		margin: -100px 0 -1px -100px;
	}

	.row.percent-150 > * {
		padding: 75px 0 0 75px;
	}

	.row .percent-150 {
		margin: -75px 0 -1px -75px;
	}

	.row.uniform.percent-150 > * {
		padding: 75px 0 0 75px;
	}

	.row.uniform.percent-150 {
		margin: -75px 0 -1px -75px;
	}

	.row.percent-50 > * {
		padding: 25px 0 0 25px;
	}

	.row.percent-50 {
		margin: -25px 0 -1px -25px;
	}

	.row.uniform.percent-50 > * {
		padding: 25px 0 0 25px;
	}

	.row.uniform.percent-50 {
		margin: -25px 0 -1px -25px;
	}

	.row.percent-25 > * {
		padding: 12.5px 0 0 12.5px;
	}

	.row.percent-25 {
		margin: -12.5px 0 -1px -12.5px;
	}

	.row.uniform.percent-25 > * {
		padding: 12.5px 0 0 12.5px;
	}

	.row.uniform.percent-25 {
		margin: -12.5px 0 -1px -12.5px;
	}

	.u12, .u12x {
		width: 100%;
		clear: none;
		margin-left: 0;
	}

	.u11, .u11x {
		width: 91.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.u10, .u10x {
		width: 83.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.u9, .u9x {
		width: 75%;
		clear: none;
		margin-left: 0;
	}

	.u8, .u8x {
		width: 66.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.u7, .u7x {
		width: 58.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.u6, .u6x {
		width: 50%;
		clear: none;
		margin-left: 0;
	}

	.u5, .u5x {
		width: 41.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.u4, .u4x {
		width: 33.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.u3, .u3x {
		width: 25%;
		clear: none;
		margin-left: 0;
	}

	.u2, .u2x {
		width: 16.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.u1, .u1x {
		width: 8.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.u12x + *,
	.u11x + *,
	.u10x + *,
	.u9x + *,
	.u8x + *,
	.u7x + *,
	.u6x + *,
	.u5x + *,
	.u4x + *,
	.u3x + *,
	.u2x + *,
	.u1x + * {
		clear: left;
	}

	.-u11u {
		margin-left: 91.66667%;
	}

	.-u10u {
		margin-left: 83.33333%;
	}

	.-u9u {
		margin-left: 75%;
	}

	.-u8u {
		margin-left: 66.66667%;
	}

	.-u7u {
		margin-left: 58.33333%;
	}

	.-u6u {
		margin-left: 50%;
	}

	.-u5u {
		margin-left: 41.66667%;
	}

	.-u4u {
		margin-left: 33.33333%;
	}

	.-u3u {
		margin-left: 25%;
	}

	.-u2u {
		margin-left: 16.66667%;
	}

	.-u1u {
		margin-left: 8.33333%;
	}

	@media screen and (max-width: 1680px) {

		.row > * {
			padding: 40px 0 0 40px;
		}

		.row {
			margin: -40px 0 -1px -40px;
		}

		.row.uniform > * {
			padding: 40px 0 0 40px;
		}

		.row.uniform {
			margin: -40px 0 -1px -40px;
		}

		.row.percent-200 > * {
			padding: 80px 0 0 80px;
		}

		.row.percent-200 {
			margin: -80px 0 -1px -80px;
		}

		.row.uniform.percent-200 > * {
			padding: 80px 0 0 80px;
		}

		.row.uniform.percent-200 {
			margin: -80px 0 -1px -80px;
		}

		.row.percent-150 > * {
			padding: 60px 0 0 60px;
		}

		.row.percent-150 {
			margin: -60px 0 -1px -60px;
		}

		.row.uniform.percent-150 > * {
			padding: 60px 0 0 60px;
		}

		.row.uniform.percent-150 {
			margin: -60px 0 -1px -60px;
		}

		.row.percent-50 > * {
			padding: 20px 0 0 20px;
		}

		.row.percent-50 {
			margin: -20px 0 -1px -20px;
		}

		.row.uniform.percent-50 > * {
			padding: 20px 0 0 20px;
		}

		.row.uniform.percent-50 {
			margin: -20px 0 -1px -20px;
		}

		.row.percent-25 > * {
			padding: 10px 0 0 10px;
		}

		.row.percent-25 {
			margin: -10px 0 -1px -10px;
		}

		.row.uniform.percent-25 > * {
			padding: 10px 0 0 10px;
		}

		.row.uniform.percent-25 {
			margin: -10px 0 -1px -10px;
		}

		.u12-wide, .u12x-wide {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.u11-wide, .u11x-wide {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u10-wide, .u10x-wide {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u9-wide, .u9x-wide {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.u8-wide, .u8x-wide {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u7-wide, .u7x-wide {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u6-wide, .u6x-wide {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.u5-wide, .u5x-wide {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u4-wide, .u4x-wide{
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u3-wide, .u3x-wide {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.u2-wide, .u2x-wide {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u1-wide, .u1x-wide {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u12x-wide + *,
		.u11x-wide + *,
		.u10x-wide + *,
		.u9x-wide + *,
		.u8x-wide + *,
		.u7x-wide + *,
		.u6x-wide + *,
		.u5x-wide + *,
		.u4x-wide+ *,
		.u3x-wide + *,
		.u2x-wide + *,
		.u1x-wide + * {
			clear: left;
		}

		.-u11-wide {
			margin-left: 91.66667%;
		}

		.-u10-wide {
			margin-left: 83.33333%;
		}

		.-u9-wide {
			margin-left: 75%;
		}

		.-u8-wide {
			margin-left: 66.66667%;
		}

		.-u7-wide {
			margin-left: 58.33333%;
		}

		.-u6-wide {
			margin-left: 50%;
		}

		.-u5-wide {
			margin-left: 41.66667%;
		}

		.-u4-wide {
			margin-left: 33.33333%;
		}

		.-u3-wide {
			margin-left: 25%;
		}

		.-u2-wide {
			margin-left: 16.66667%;
		}

		.-u1-wide {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 1280px) {

		.row > * {
			padding: 30px 0 0 30px;
		}

		.row {
			margin: -30px 0 -1px -30px;
		}

		.row.uniform > * {
			padding: 30px 0 0 30px;
		}

		.row.uniform {
			margin: -30px 0 -1px -30px;
		}

		.row.percent-200 > * {
			padding: 60px 0 0 60px;
		}

		.row.percent-200 {
			margin: -60px 0 -1px -60px;
		}

		.row.uniform.percent-200 > * {
			padding: 60px 0 0 60px;
		}

		.row.uniform.percent-200 {
			margin: -60px 0 -1px -60px;
		}

		.row.percent-150 > * {
			padding: 45px 0 0 45px;
		}

		.row.percent-150 {
			margin: -45px 0 -1px -45px;
		}

		.row.uniform.percent-150 > * {
			padding: 45px 0 0 45px;
		}

		.row.uniform.percent-150 {
			margin: -45px 0 -1px -45px;
		}

		.row.percent-50 > * {
			padding: 15px 0 0 15px;
		}

		.row.percent-50 {
			margin: -15px 0 -1px -15px;
		}

		.row.uniform.percent-50 > * {
			padding: 15px 0 0 15px;
		}

		.row.uniform.percent-50 {
			margin: -15px 0 -1px -15px;
		}

		.row.percent-25 > * {
			padding: 7.5px 0 0 7.5px;
		}

		.row.percent-25 {
			margin: -7.5px 0 -1px -7.5px;
		}

		.row.uniform.percent-25 > * {
			padding: 7.5px 0 0 7.5px;
		}

		.row.uniform.percent-25 {
			margin: -7.5px 0 -1px -7.5px;
		}

		.u12-normal, .u12x-normal {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.u11-normal, .u11x-normal {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u10-normal, .u10x-normal {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u9-normal, .u9x-normal {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.u8-normal, .u8x-normal {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u7-normal, .u7x-normal {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u6-normal, .u6x-normal {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.u5-normal, .u5x-normal {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u4-normal, .u4x-normal {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u3-normal, .u3x-normal {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.u2-normal, .u2x-normal {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u1-normal, .u1x-normal {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u12x-normal + *,
		.u11x-normal + *,
		.u10x-normal + *,
		.u9x-normal + *,
		.u8x-normal + *,
		.u7x-normal + *,
		.u6x-normal + *,
		.u5x-normal + *,
		.u4x-normal + *,
		.u3x-normal + *,
		.u2x-normal + *,
		.u1x-normal + * {
			clear: left;
		}

		.-u11-normal {
			margin-left: 91.66667%;
		}

		.-u10-normal {
			margin-left: 83.33333%;
		}

		.-u9-normal {
			margin-left: 75%;
		}

		.-u8-normal {
			margin-left: 66.66667%;
		}

		.-u7-normal {
			margin-left: 58.33333%;
		}

		.-u6-normal {
			margin-left: 50%;
		}

		.-u5-normal {
			margin-left: 41.66667%;
		}

		.-u4-normal {
			margin-left: 33.33333%;
		}

		.-u3-normal {
			margin-left: 25%;
		}

		.-u2-normal {
			margin-left: 16.66667%;
		}

		.-u1-normal {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 1000px) {

		.row > * {
			padding: 25px 0 0 25px;
		}

		.row {
			margin: -25px 0 -1px -25px;
		}

		.row.uniform > * {
			padding: 25px 0 0 25px;
		}

		.row.uniform {
			margin: -25px 0 -1px -25px;
		}

		.row.percent-200 > * {
			padding: 50px 0 0 50px;
		}

		.row.percent-200 {
			margin: -50px 0 -1px -50px;
		}

		.row.uniform.percent-200 > * {
			padding: 50px 0 0 50px;
		}

		.row.uniform.percent-200 {
			margin: -50px 0 -1px -50px;
		}

		.row.percent-150 > * {
			padding: 37.5px 0 0 37.5px;
		}

		.row.percent-150 {
			margin: -37.5px 0 -1px -37.5px;
		}

		.row.uniform.percent-150 > * {
			padding: 37.5px 0 0 37.5px;
		}

		.row.uniform.percent-150 {
			margin: -37.5px 0 -1px -37.5px;
		}

		.row.percent-50 > * {
			padding: 12.5px 0 0 12.5px;
		}

		.row.percent-50 {
			margin: -12.5px 0 -1px -12.5px;
		}

		.row.uniform.percent-50 > * {
			padding: 12.5px 0 0 12.5px;
		}

		.row.uniform.percent-50 {
			margin: -12.5px 0 -1px -12.5px;
		}

		.row.percent-25 > * {
			padding: 6.25px 0 0 6.25px;
		}

		.row.percent-25 {
			margin: -6.25px 0 -1px -6.25px;
		}

		.row.uniform.percent-25 > * {
			padding: 6.25px 0 0 6.25px;
		}

		.row.uniform.percent-25 {
			margin: -6.25px 0 -1px -6.25px;
		}

		.u12-narrow, .u12x-narrow {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.u11-narrow, .u11x-narrow {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u10-narrow, .u10x-narrow {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u9-narrow, .u9x-narrow {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.u8-narrow, .u8x-narrow {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u7-narrow, .u7x-narrow {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u6-narrow, .u6x-narrow {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.u5-narrow, .u5x-narrow {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u4-narrow, .u4x-narrow {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u3-narrow, .u3x-narrow {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.u2-narrow, .u2x-narrow {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u1-narrow, .u1x-narrow {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u12x-narrow + *,
		.u11x-narrow + *,
		.u10x-narrow + *,
		.u9x-narrow + *,
		.u8x-narrow + *,
		.u7x-narrow + *,
		.u6x-narrow + *,
		.u5x-narrow + *,
		.u4x-narrow + *,
		.u3x-narrow + *,
		.u2x-narrow + *,
		.u1x-narrow + * {
			clear: left;
		}

		.-u11-narrow {
			margin-left: 91.66667%;
		}

		.-u10-narrow {
			margin-left: 83.33333%;
		}

		.-u9-narrow {
			margin-left: 75%;
		}

		.-u8-narrow {
			margin-left: 66.66667%;
		}

		.-u7-narrow {
			margin-left: 58.33333%;
		}

		.-u6-narrow {
			margin-left: 50%;
		}

		.-u5-narrow {
			margin-left: 41.66667%;
		}

		.-u4-narrow {
			margin-left: 33.33333%;
		}

		.-u3-narrow {
			margin-left: 25%;
		}

		.-u2-narrow {
			margin-left: 16.66667%;
		}

		.-u1-narrow {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 736px) {

		.row > * {
			padding: 20px 0 0 20px;
		}

		.row {
			margin: -20px 0 -1px -20px;
		}

		.row.uniform > * {
			padding: 20px 0 0 20px;
		}

		.row.uniform {
			margin: -20px 0 -1px -20px;
		}

		.row.percent-200 > * {
			padding: 40px 0 0 40px;
		}

		.row.percent-200 {
			margin: -40px 0 -1px -40px;
		}

		.row.uniform.percent-200 > * {
			padding: 40px 0 0 40px;
		}

		.row.uniform.percent-200 {
			margin: -40px 0 -1px -40px;
		}

		.row.percent-150 > * {
			padding: 30px 0 0 30px;
		}

		.row.percent-150 {
			margin: -30px 0 -1px -30px;
		}

		.row.uniform.percent-150 > * {
			padding: 30px 0 0 30px;
		}

		.row.uniform.percent-150 {
			margin: -30px 0 -1px -30px;
		}

		.row.percent-50 > * {
			padding: 10px 0 0 10px;
		}

		.row.percent-50 {
			margin: -10px 0 -1px -10px;
		}

		.row.uniform.percent-50 > * {
			padding: 10px 0 0 10px;
		}

		.row.uniform.percent-50 {
			margin: -10px 0 -1px -10px;
		}

		.row.percent-25 > * {
			padding: 5px 0 0 5px;
		}

		.row.percent-25 {
			margin: -5px 0 -1px -5px;
		}

		.row.uniform.percent-25 > * {
			padding: 5px 0 0 5px;
		}

		.row.uniform.percent-25 {
			margin: -5px 0 -1px -5px;
		}

		.u12-mobile, .u12x-mobile {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.u11-mobile, .u11x-mobile {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u10-mobile, .u10x-mobile {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u9-mobile, .u9x-mobile {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.u8-mobile, .u8x-mobile {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u7-mobile, .u7x-mobile {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u6-mobile, .u6x-mobile {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.u5-mobile, .u5x-mobile {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u4-mobile, .u4x-mobile {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u3-mobile, .u3x-mobile {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.u2-mobile, .u2x-mobile {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.u1-mobile, .u1x-mobile {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.u12x-mobile + *,
		.u11x-mobile + *,
		.u10x-mobile + *,
		.u9x-mobile + *,
		.u8x-mobile + *,
		.u7x-mobile + *,
		.u6x-mobile + *,
		.u5x-mobile + *,
		.u4x-mobile + *,
		.u3x-mobile + *,
		.u2x-mobile + *,
		.u1x-mobile + * {
			clear: left;
		}

		.u11-mobile {
			margin-left: 91.66667%;
		}

		.-u10-mobile {
			margin-left: 83.33333%;
		}

		.-u9-mobile {
			margin-left: 75%;
		}

		.-u8-mobile {
			margin-left: 66.66667%;
		}

		.-u7-mobile {
			margin-left: 58.33333%;
		}

		.-u6-mobile {
			margin-left: 50%;
		}

		.-u5-mobile {
			margin-left: 41.66667%;
		}

		.-u4-mobile {
			margin-left: 33.33333%;
		}

		.-u3-mobile {
			margin-left: 25%;
		}

		.-u2-mobile {
			margin-left: 16.66667%;
		}
6u
		.-u1-mobile {
			margin-left: 8.33333%;
		}

	}

/* Basic */

	@-ms-viewport {
		width: device-width;
	}

	body {
		background: #F8F8F8;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		font-size: 17pt;
		line-height: 1.75em;
		color: #888;
		-webkit-text-stroke: 0.1px;
	}

		body.is-loading * {
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
		}

	.dark {
		color: #aaa;
		color: rgba(255, 255, 255, 0.65);
	}

	input, textarea, select {
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		font-size: 17pt;
		line-height: 1.75em;
		color: #888;
		-webkit-text-stroke: 0.1px;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #666;
		margin: 0 0 1em 0;
		font-weight: 100;
		line-height: 1.5em;
	}

	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
		color: inherit;
		text-decoration: none;
	}

	.dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
		color: #fff;
	}

	strong, b {
		font-weight: 400;
		color: inherit;
	}

	.dark strong, .dark b {
		color: #fff;
		color: rgba(255, 255, 255, 0.85);
	}

	em, i {
		font-style: italic;
	}

	a {
		-moz-transition: border-bottom-color 0.25s ease-in-out;
		-webkit-transition: border-bottom-color 0.25s ease-in-out;
		-ms-transition: border-bottom-color 0.25s ease-in-out;
		transition: border-bottom-color 0.25s ease-in-out;
		color: inherit;
		text-decoration: none;
		border-bottom: dotted 1px rgba(0, 0, 0, 0.25);
	}

		a:hover {
			border-bottom-color: transparent;
		}

	.dark a {
		color: #fff;
		border-bottom-color: rgba(255, 255, 255, 0.5);
	}

		.dark a:hover {
			border-bottom-color: rgba(255, 255, 255, 0);
		}

	sub {
		position: relative;
		top: 0.5em;
		font-size: 0.8em;
	}

	sup {
		position: relative;
		top: -0.5em;
		font-size: 0.8em;
	}

	hr {
		border: 0;
		border-top: solid 1px #e6e6e6;
		margin: 2em 0 2em 0;
	}

	.dark hr {
		border-top-color: rgba(255, 255, 255, 0.5);
	}

	blockquote {
		border-left: solid 0.25em #e6e6e6;
		padding: 1em 0 1em 2em;
		font-style: italic;
	}
	
.gray-back{
		background-color:gray;
		}
	.dark blockquote {
		border-left-color: rgba(255, 255, 255, 0.5);
	}

	p, ul, ol, dl, table {
		margin-bottom: 1em;
	}

	p {
		text-align: justify;
	}

	header {
		margin-bottom: 1em;
	}

		header h1, header h2, header h3, header h4, header h5, header h6 {
			margin: 0;
		}

		header p {
			display: block;
			margin: 0;
			padding: 0.25em 0 0.5em 0;
		}

	footer {
		padding-top: 1.5em;
	}

	br.clear {
		clear: both;
	}

	.featured {
		text-align: center;
	}

		.featured p {
			text-align: center;
		}

/* Sections/Article */

	section,
	article {
		margin-bottom: 3em;
	}

	section > :last-child,
	article > :last-child,
	section:last-child,
	article:last-child {
		margin-bottom: 0;
	}

	.row > section,
	.row > article {
		margin-bottom: 0;
	}

/* Image */

	.image {
		position: relative;
		display: inline-block;
		border: 0;
	}

		.image:after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: url("static/images/overlay.png");
		}

		.image img {
			display: block;
			width: 100%;
			border-radius: 0.5em;
		}

		.image.featured {
			display: block;
			width: 100%;
			margin: 0 0 2em 0;
		}

		.image.fit {
			display: block;
			width: 100%;
		}

		.image.left {
			float: left;
			margin: 0 2em 2em 0;
		}

		.image.centered {
			display: block;
			margin: 0 0 2em 0;
		}

			.image.centered img {
				margin: 0 auto;
				width: auto;
			}

/* List */

	ul.default {
		list-style: disc;
		padding-left: 1em;
	}

		ul.default li {
			padding-left: 0.5em;
		}

	ul.icons {
		cursor: default;
	}

		ul.icons li {
			display: inline-block;
			padding-left: 0.75em;

		}

		ul.icons a {
			-moz-transition: background-color 0.25s ease-in-out;
			-webkit-transition: background-color 0.25s ease-in-out;
			-ms-transition: background-color 0.25s ease-in-out;
			transition: background-color 0.25s ease-in-out;
			display: inline-block;
			width: 2.75em;
			height: 2.75em;
			line-height: 2.8em;
			text-align: center;
			border: 0;
			box-shadow: inset 0 0 0 1px #e6e6e6;
			border-radius: 100%;
			color: #aaa;
		}

			ul.icons a:hover {
				background: rgba(0, 0, 0, 0.025);
			}

	ul.menu {
		cursor: default;
	}

		ul.menu li {
			display: inline-block;
			line-height: 1em;
			border-left: solid 1px #e6e6e6;
			padding: 0 0 0 0.5em;
			margin: 0 0 0 0.5em;
		}

			ul.menu li:first-child {
				border-left: 0;
				padding-left: 0;
				margin-left: 0;
			}

	ul.actions {
		cursor: default;
	}

		ul.actions li {
			display: inline-block;
			margin: 0 0 0 0.5em;
		}

			ul.actions li:first-child {
				margin-left: 0;
			}

	ol.default {
		list-style: decimal;
		padding-left: 1.25em;
	}

		ol.default li {
			padding-left: 0.25em;
		}

/* Form */

	form .actions {
		margin-bottom: 0;
	}

	form label {
		display: block;
	}

	form input[type="text"],
	form input[type="email"],
	form input[type="password"],
	form select,
	form .select,
	form textarea {
		-moz-transition: all 0.25s ease-in-out;
		-webkit-transition: all 0.25s ease-in-out;
		-ms-transition: all 0.25s ease-in-out;
		transition: all 0.25s ease-in-out;
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		display: block;
		box-shadow: inset 0 0 0 1px #e6e6e6;
		background: #f8f8f8;
		width: 100%;
		padding: 0.85em 1em 0.85em 1em;
		border-radius: 0.25em;
		border: 0;
	}

		form input[type="text"]:focus,
		form input[type="email"]:focus,
		form input[type="password"]:focus,
		form select:focus,
		form .select:focus,
		form textarea:focus {
			outline: 0;
			box-shadow: inset 0 0 0 1px #afd9e0;
			background: #fcfcfc;
		}

	form input[type="text"],
	form input[type="email"],
	form input[type="password"],
	form select {
		line-height: 1.25em;
	}

	form textarea {
		min-height: 13em;
	}

	form select {
		position: relative;
	}

		form select option:not(:checked) {
			color: #000;
		}

	form .select {
		position: relative;
		padding: 0;
		overflow-x: hidden;
		outline: 0;
	}

		form .select select {
			width: calc(100% + 2em);
			background: none !important;
			box-shadow: none !important;
			border: 0 !important;
			cursor: pointer;
		}

			form .select select::-moz-focus-inner {
				border: 0;
				outline: 0;
			}

		form .select:before {
			content: '';
			position: absolute;
			top: 15%;
			right: 1em;
			width: 1.25em;
			height: 75%;
			background: url("static/images/arrow.svg") center center no-repeat;
			background-size: contain;
			z-index: 0;
		}

		form .select select::-ms-expand {
			display: none;
		}

	form ::-moz-focus-inner {
		border: 0;
	}

	form .formerize-placeholder {
		color: #555 !important;
	}

	form ::-webkit-input-placeholder {
		color: #aaa !important;
	}

	form :-moz-placeholder {
		color: #555 !important;
	}

	form ::-moz-placeholder {
		color: #555 !important;
	}

	form :-ms-input-placeholder {
		color: #555 !important;
	}

	.dark form input[type="text"],
	.dark form input[type="email"],
	.dark form input[type="password"],
	.dark form select,
	.dark form .select,
	.dark form textarea {
		background: none;
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
		color: #fff;
	}

		.dark form input[type="text"]:focus,
		.dark form input[type="email"]:focus,
		.dark form input[type="password"]:focus,
		.dark form select:focus,
		.dark form .select:focus,
		.dark form textarea:focus {
			background: rgba(255, 255, 255, 0.1);
			box-shadow: inset 0 0 0 1px #fff;
		}

	.dark form .select:before {
		background: url("static/images/dark-arrow.svg") center center no-repeat;
		background-size: contain;
	}

	.dark form .formerize-placeholder {
		color: #aaa !important;
		color: rgba(255, 255, 255, 0.85) !important;
	}

	.dark form ::-webkit-input-placeholder {
		color: rgba(255, 255, 255, 0.85) !important;
	}

	.dark form :-moz-placeholder {
		color: rgba(255, 255, 255, 0.85) !important;
	}

	.dark form ::-moz-placeholder {
		color: rgba(255, 255, 255, 0.85) !important;
	}

	.dark form :-ms-input-placeholder {
		color: rgba(255, 255, 255, 0.85) !important;
	}

/* Table */

	table {
		width: 100%;
	}

		table.default {
			width: 100%;
			border-collapse: collapse;
		}

			table.default tbody tr {
				border: solid 1px #e6e6e6;
			}

				table.default tbody tr:nth-child(2n+2) {
					background: #f8f8f8;
				}

			table.default td {
				padding: 0.5em 1em 0.5em 1em;
			}

			table.default th {
				text-align: left;
				padding: 0.5em 1em 1em 1em;
			}

			table.default tfoot td {
				padding-top: 1em;
			}

	.dark table.default tbody tr {
		border-color: rgba(255, 255, 255, 0.5);
	}

		.dark table.default tbody tr:nth-child(2n+2) {
			background: rgba(255, 255, 255, 0.1);
		}

/* Button */

	input[type="button"],
	input[type="submit"],
	input[type="reset"],
	button,
	.button {
		-moz-transition: all 0.25s ease-in-out;
		-webkit-transition: all 0.25s ease-in-out;
		-ms-transition: all 0.25s ease-in-out;
		transition: all 0.25s ease-in-out;
		-webkit-appearance: none;
		position: relative;
		display: inline-block;
		background: #3d3d3d;
		padding: 0.85em 3em 0.85em 3em;
		border-radius: 0.25em;
		cursor: pointer;
		border: 0;
		color: #fff;
		text-align: center;
		text-decoration: none;
	}

		input[type="button"]:hover,
		input[type="submit"]:hover,
		input[type="reset"]:hover,
		button:hover,
		.button:hover {
			background: #4f4f4f;
		}

		input[type="button"].alt,
		input[type="submit"].alt,
		input[type="reset"].alt,
		button.alt,
		.button.alt {
			color: inherit;
			box-shadow: inset 0 0 0 1px #e6e6e6;
			background: none;
		}

			input[type="button"].alt:hover,
			input[type="submit"].alt:hover,
			input[type="reset"].alt:hover,
			button.alt:hover,
			.button.alt:hover {
				background: rgba(0, 0, 0, 0.025);
			}

	.dark input[type="button"],
	.dark input[type="submit"],
	.dark input[type="reset"],
	.dark button,
	.dark .button {
		background: rgba(255, 255, 255, 0.15);
		box-shadow: inset 0 0 0 1px #fff;
		color: #fff;
	}

		.dark input[type="button"]:hover,
		.dark input[type="submit"]:hover,
		.dark input[type="reset"]:hover,
		.dark button:hover,
		.dark .button:hover {
			background: rgba(255, 255, 255, 0.25);
		}

		.dark input[type="button"].alt,
		.dark input[type="submit"].alt,
		.dark input[type="reset"].alt,
		.dark button.alt,
		.dark .button.alt {
			background: none;
			box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
		}

			.dark input[type="button"].alt:hover,
			.dark input[type="submit"].alt:hover,
			.dark input[type="reset"].alt:hover,
			.dark button.alt:hover,
			.dark .button.alt:hover {
				background: rgba(255, 255, 255, 0.15);
				box-shadow: inset 0 0 0 1px #fff;
			}

/* Feature Icon */

	.feature-icon {
		display: inline-block;
		position: relative;
		padding-bottom: 5em;
		margin-bottom: 2.75em;
		cursor: default;
	}

		.feature-icon .icon {
			display: inline-block;
			width: 2em;
			height: 2em;
			font-size: 4.5em;
			border-radius: 100%;
			box-shadow: inset 0 0 0 1px #666;
			color: #666;
			line-height: 2.1em;
		}

		.feature-icon:before {
			content: '';
			background: #666;
			position: absolute;
			bottom: 0;
			left: 50%;
			margin-left: -0.325em;
			width: 0.65em;
			height: 0.65em;
			display: block;
			border-radius: 100%;
		}

		.feature-icon:after {
			content: '';
			position: absolute;
			left: 50%;
			bottom: 0.65em;
			width: 1px;
			height: 4.35em;
			background: #666;
			margin-left: -0.5px;
		}

	.dark .feature-icon .icon {
		background: rgba(255, 255, 255, 0.15);
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
		color: #fff;
	}

	.dark .feature-icon:before, .dark .feature-icon:after {
		background: rgba(255, 255, 255, 0.5);
	}

/* Icons */

	.icon {
		text-decoration: none;
	}

		.icon:before {
			display: inline-block;
			font-family: FontAwesome;
			font-size: 1.25em;
			text-decoration: none;
			font-style: normal;
			font-weight: normal;
			line-height: 1;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

		.icon > .label {
			display: none;
		}


/* Main Sections */

	.main {
		position: relative;
		margin: 0;
	}

		.main > header {
			background: #fff;
			text-align: center;
			padding: 5em 0 5em 0;
			margin: 0;
		}

			.main > header h2 {
				font-size: 2.25em;
				font-weight: 100;
				margin-bottom: 0;
			}

			.main > header p {
				margin: 2em 0 0 0;
				padding: 0;
				text-align: center;
			}

		.main > .content {
			padding: 6em 0 6em 0;
		}

			.main > .content h3 {
				font-size: 1.5em;
			}

			.main > .content.dark {
				background: #433;
			}

			.main > .content.style1 {
				background: url("static/images/bgtr.svg") top right no-repeat, url("static/images/bgbl.svg") bottom left no-repeat, url("static/images/bgbl.svg") bottom left no-repeat, url("static/images/overlay.png"), linear-gradient(45deg, #b39c68, #a56365, #412e4c);
			}

			.main > .content.style2 {
				background: url("static/images/bgtr.svg") top right no-repeat, url("static/images/bgbl.svg") bottom left no-repeat, url("static/images/overlay.png"), linear-gradient(45deg, #384955, #655361, #85505f);
			}

			.main > .content.style3 {
				background: url("static/images/bgtr.svg") top right no-repeat, url("static/images/bgbl.svg") bottom left no-repeat, url("static/images/overlay.png"), linear-gradient(45deg, #5f796b, #3a4e59, #2f394e);
			}

			.main > .content.style4 {
				padding-top: 0;
				background: #fff;
			}

/* Footer */

	#footer {
		position: relative;
		margin: 0;
		text-align: center;
		padding: 4em 0 8em 0;
		box-shadow: inset 0 1px 0 0 #e6e6e6;
	}

		#footer .copyright {
			margin-top: 3em;
			font-size: 0.8em;
			color: #aaa;
		}

			#footer .copyright a {
				color: inherit;
			}

		#footer ul.icons a {
			box-shadow: inset 0 0 0 1px #d6d6d6;
		}

/* Wide */

	@media screen and (max-width: 1680px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 15pt;
				line-height: 1.75em;
			}

	}

/* Normal */

	@media screen and (max-width: 1280px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 13pt;
				line-height: 1.65em;
			}

		/* Feature Icon */

			.feature-icon {
				margin-bottom: 2em;
			}

		/* Header */

			#header {
				padding: 12em 0 12em 0;
			}

		/* Main Sections */

			.main > header {
				padding: 4em 0 4em 0;
			}

			.main > .content {
				padding: 4em 0 4em 0;
			}

	}

/* Narrow */

	@media screen and (max-width: 1000px) {

		/* Basic */

			header, footer, h2, h3, h4, h5, h6, header > p {
				text-align: center;
			}

		/* Sections/Article */

			section, article {
				margin: 0 0 2.5em 0 !important;
			}

			.row > section, .row > article {
				margin: 0 0 2.5em 0 !important;
			}

		/* Table */

			.table-wrapper {
				width: 100%;
				overflow-x: scroll;
				padding-left: 1px;
				-webkit-overflow-scrolling: touch;
			}

		/* List */

			ul.actions {
				text-align: center;
			}

		/* Header */

			#header {
				margin: 0 !important;
				padding: 8em 2em 8em 2em;
			}

				#header header p {
					margin-top: 1em;
				}

				#header footer {
					padding-top: 1.25em;
				}

		/* Main Sections */

			.main {
				margin: 0 !important;
			}

				.main > header {
					padding: 3.5em 2em 3.5em 2em;
				}

					.main > header h2 {
						font-size: 1.85em;
					}

					.main > header br {
						display: none;
					}

					.main > header p {
						margin: 1.5em 0 0 0;
					}

				.main > .content {
					padding: 3.5em 20px 3.5em 20px;
				}

					.main > .content > .container > :last-child {
						margin-bottom: 0 !important;
					}

		/* Footer */

			#footer {
				margin: 0 !important;
				padding: 3em 0 3em 0;
			}

				#footer .copyright {
					margin-top: 2em;
				}

	}

/* Mobile */

	@media screen and (max-width: 736px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 11pt;
			}

		/* Sections/Article */

			section, article {
				margin: 0 0 1.5em 0 !important;
			}

			.row > section, .row > article {
				margin: 0 0 1.5em 0 !important;
			}

		/* Button */

			.button {
				padding-left: 0;
				padding-right: 0;
				width: 100%;
				max-width: 300px;
			}

		/* List */

			ul.icons li {
				padding-left: 0.35em;
			}

			ul.actions li {
				display: block;
				margin: 1em 0 1em 0;
			}

			ul.menu li {
				border: 0;
				padding: 0;
				display: block;
				margin: 1em 0 1em 0;
			}

		/* Header */

			#header {
				padding: 6em 20px 6em 20px;
			}

				#header > header {
					padding: 0 1em 0 1em;
				}

		/* Main Sections */

			.main > header {
				padding: 3em 20px 3em 20px;
			}

				.main > header h2 {
					font-size: 1.5em;
				}

			.main > .content {
				padding: 3em 20px 3em 20px;
			}

				.main > .content h3 {
					font-size: 1.25em;
				}

	}
    `}</style>
)