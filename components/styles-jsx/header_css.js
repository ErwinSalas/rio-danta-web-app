export default ()=>(
    <style jsx>{`
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
        /* Header */

            #header {
                position: relative;
                margin: 0;
                background-image: linear-gradient(to top, rgba(63, 46, 65, 0.8),  rgba(65, 55, 46, 0.8)), url("static/images/bg.jpg");
                background-size:  cover;
                background-position:  center center;
                background-repeat:  no-repeat;
                padding: 14em 0 14em 0;
                text-align: center;
                color: rgb(255, 255, 255);
            }

                #header header h1 {
                    font-size: 2.25em;
                    line-height: 1.25em;
                    margin-bottom: 0;
                }

                #header header p {
                    margin-top: 1.25em;
                    font-weight: 100;
                    padding: 0;
                    font-size: 1.25em;
                    line-height: 1.5em;
                    text-align: center;
                }

                #header footer {
                    padding-top: 1.5em;
                }

    `}</style>
)