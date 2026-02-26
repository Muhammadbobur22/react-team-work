import header_second_img from "../../assets/Button (3).png"
import header_second_img2 from "../../assets/header_scnd.png"
import header_second_img3 from "../../assets/Image (2).png"
import body_3 from "../../assets/Body (3).png"
import banner_scnd_f_cards_card_img from "../../assets/Icon (7).png"
import banner_scnd_f_cards_card2_img from "../../assets/Icon (8).png"
import student_icon from "../../assets/Sort.png"
import cell_performance from "../../assets/Cell-Performance.png"
import cell_performance1 from "../../assets/Cell-Performance (1).png"
import cell_performance2 from "../../assets/Cell-Performance (2).png"
import cell_performance3 from "../../assets/Cell-Attendance.png"
import chart_6 from "../../assets/Chart (6).png"
import chart_8 from "../../assets/Chart (8).png"
import { useNavigate } from "react-router-dom"

const Students = () => {
  const navigate = useNavigate()
  const styles = {
    container: {
      display: "flex",
      margin: "auto",
      TextDecoder: "none"

    },
    banner: {
      width: "1215px",
      height: "700px",
      backgroundColor: "#dddddd43",
    },
    header: {
      display: "flex",
      justifyContent: "space-between"
    },
    header_second: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px"
    },
    header_second_img: {
      width: "40px",
      height: "40px",
      marginTop: "10px"
    },
    input: {
      width: "250px",
      height: "40px",
      marginTop: "20px"
    },
    header_first_text: {
      width: "587px",
      height: "50px",
      marginLeft: "20px",
    },
    header_first_text_p: {
      marginTop: "5px"
    },
    header_first_text_h: {
      color: "#15456F",
      fontWeight: "700",
      fontSize: "24px",
      marginTop:"15px"
    },
    span: {
      color: "#058EB0"
    },
    input: {
      width: "250px",
      height: "40px",
      marginTop: "10px",
      border: "1px solid #999",
      backgroundColor: "#FFFFFF",
      borderRadius: "10px"
    },
    header_scnd_text_p: {
      marginTop: "5px"
    },
    banner_scnd_f_text1: {
      display: "flex",
      gap: "16px",
      marginLeft: "20px"
    },
    banner_scnd_f_cards_card: {
      width: "151px",
      height: "  118px",
      backgroundColor: "#CEEAF1",
      display: "flex",
      borderRadius: "10px"

    },
    banner_scnd_f_cards_card_p: {
      marginTop: "20px"
    },
    banner_scnd_f_cards_card_text: {
      paddingTop: "30px",
      paddingLeft: "10px"
    },
    banner_scnd_f_cards_card_img: {
      width: "36px",
      height: "36px",
      marginTop: "10px"
    },
    banner_scnd_f_text1_cards: {
      display: 'flex',
      gap: "10px"
    },
    banner_scnd_f_cards_card2: {
      width: "151px",
      height: "  118px",
      display: "flex",
      borderRadius: "10px",
      backgroundColor: "#fff",
      marginBottom: "20px"
    },
    banner_scnd_f_text1_text2: {
      width: "455px",
      height: "252px",
      backgroundColor: "#fff",
      borderRadius: "10px"
    },
    banner_scnd_f_text1_text2_t: {
      display: "flex",
      gap: "10px",
      justifyContent: "space-between",
      margin: "10px"
    },
    banner_scnd_f_text1_text2_t_btn: {
      width: "125px",
      height: "34px",
      marginTop: "20px",
      backgroundColor: "#CEEAF1",
      border: "none",
      borderRadius: "10px"
    },
    banner_scnd_f_text2_miniText: {
      width: "757px",
      height: "34px",
      display: "flex",
      justifyContent: "space-between",
      margin: "10px",
      alignItems: "center",
      color: "#15456F"
    },
    banner_scnd_f_text2_input: {
      width: "457px",
      height: "34px",
      display: "flex",
      gap: "10px",
    },
    input_banner: {
      width: "210px",
      height: "34px",
      marginLeft: "50px",
      border: "none",
      backgroundColor: "#d8d5d5ae",
      borderRadius: "10px"
    },
    btn_f: {
      width: "98px",
      height: "34px",
      border: "none",
      backgroundColor: "#CEEAF1",
      borderRadius: "10px"
    },
    btn_scnd: {
      width: '116px',
      height: "34px  ",
      border: "none",
      backgroundColor: "#FFCDFD",
      borderRadius: "10px"

    },
    icon_p: {
      display: "flex",
      gap: "10px",
      alignItems: "center"
    },
    mini_div: {
      width: "757px",
      height: "28px",
      display: "flex",
      backgroundColor: "#fff",
      justifyContent: "space-between",
      borderRadius: "10px  ",
      padding: '10px',
      marginBottom: "15px",
      marginLeft: '16px'
    },
    michael: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      width: "757px",
      height: "58px",
      display: "flex",
      backgroundColor: "#fff",
      justifyContent: "space-between",
      borderRadius: "10px  ",
      padding: '10px',
      marginBottom: "15px",
      marginLeft: '16px'
    },
    main_banner: {
      display: "flex",
      gap: "10px",
      marginTop:"30px"
    },
    main_banner_text_reyting: {
      width: "362px",
      height: "282px",
      margin: "5px",
      backgroundColor: "#fff",
      borderRadius: "10px"
    },
  };

  return (
    <div className="container" style={styles.container}>
      <div style={styles.banner}>
        <header style={styles.header}>
          <div style={styles.header_first}>
            <div style={styles.header_first_text}>
              <h2 style={styles.header_first_text_h}>Students</h2>
              <p style={styles.header_first_text_p}> <span style={styles.span}>Dashboard</span> Students</p>
            </div>
          </div>
          <div style={styles.header_second}>
            <input style={styles.input} type="text" placeholder=" 🔍Search anything" />
            <img style={styles.header_second_img} src={header_second_img} alt="" />
            <img style={styles.header_second_img} src={header_second_img2} alt="" />
            <img style={styles.header_second_img} src={header_second_img3} alt="" />
            <div style={styles.header_scnd_text}>
              <h2 style={styles.header_scnd_text_h}>Oscar Hansen</h2>
              <p style={styles.header_scnd_text_p}>Admin </p>
            </div>

          </div>
        </header>
        <div style={styles.main_banner}>
          <div style={styles.banner_scnd}>

            <div style={styles.banner_scnd_f}>
              <div style={styles.banner_scnd_f_text1}>
                <div style={styles.cards}>
                  <div style={styles.banner_scnd_f_text1_cards}>
                    <div style={styles.banner_scnd_f_cards_card}>
                      <div style={styles.banner_scnd_f_cards_card_text}>
                        <h2>1,245</h2>
                        <p style={styles.banner_scnd_f_cards_card_p}>Total Students</p>
                      </div>
                      <img style={styles.banner_scnd_f_cards_card_img} src={banner_scnd_f_cards_card_img} alt="" />
                    </div>
                    {/* scnd */}
                    <div style={styles.banner_scnd_f_cards_card2}>
                      <div style={styles.banner_scnd_f_cards_card_text}>
                        <h2>1,245</h2>
                        <p style={styles.banner_scnd_f_cards_card_p}>Total Students</p>
                      </div>
                      <img style={styles.banner_scnd_f_cards_card_img} src={banner_scnd_f_cards_card2_img} alt="" />
                    </div>

                  </div>
                  {/* scnd */}
                  <div style={styles.banner_scnd_f_text1_cards}>
                    <div style={styles.banner_scnd_f_cards_card2}>
                      <div style={styles.banner_scnd_f_cards_card_text}>
                        <h2>445</h2>
                        <p style={styles.banner_scnd_f_cards_card_p}>Total Students</p>
                      </div>
                      <img style={styles.banner_scnd_f_cards_card_img} src={banner_scnd_f_cards_card_img} alt="" />
                    </div>
                    {/* scnd */}
                    <div style={styles.banner_scnd_f_cards_card2}>
                      <div style={styles.banner_scnd_f_cards_card_text}>
                        <h2>545</h2>
                        <p style={styles.banner_scnd_f_cards_card_p}>Total Students</p>
                      </div>
                      <img style={styles.banner_scnd_f_cards_card_img} src={banner_scnd_f_cards_card2_img} alt="" />
                    </div>

                  </div>

                </div>



                <div style={styles.banner_scnd_f_text1_text2}>
                  <div style={styles.banner_scnd_f_text1_text2_t}>
                    <h2 style={styles.banner_scnd_f_text1_text2_t_h2}>Academic Performance</h2>
                    <button style={styles.banner_scnd_f_text1_text2_t_btn}>Last Semester</button>
                  </div>
                  <img src={body_3} alt="img" />
                </div>
              </div>

              <div style={styles.banner_scnd_f_text2}>
                <div style={styles.banner_scnd_f_text2_miniText}>
                  <h2>Students</h2>
                  <div style={styles.banner_scnd_f_text2_input}>
                    <input style={styles.input_banner} type="text" placeholder=" 🔍 Search for a student" />
                    <button style={styles.btn_f}>All Status </button>
                    <button style={styles.btn_scnd}>Add Student</button>
                  </div>
                </div>
                <div style={styles.banner_scnd_f_text2_big_text}>
                  <div style={styles.banner_scnd_f_text2_big_text_t}>
                    <div style={styles.mini_div}>
                      <div style={styles.icon_p}>
                        <p>Student</p>
                        <img src={student_icon} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <p>Class</p>
                        <img src={student_icon} alt="" />

                      </div>
                      <div style={styles.icon_p}>
                        <p>GPA</p>
                        <img src={student_icon} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <p>Performance</p>
                        <img src={student_icon} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <p>Attendance</p>
                        <img src={student_icon} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <p>Status</p>
                        <img src={student_icon} alt="" />
                      </div>
                    </div>
                    <div style={styles.michael}>
                      <div style={styles.icon_p}>
                        <img src={header_second_img3} alt="" />
                        <p>Student</p>
                      </div>
                      <div style={styles.icon_p}>
                        <p>7B</p>
                      </div>
                      <div style={styles.icon_p}>
                        <p>6.5</p>
                      </div>
                      <div style={styles.icon_p}>
                        <img src={cell_performance2} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <img src={cell_performance3} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <p>Status</p>
                        <img src={student_icon} alt="" />
                      </div>

                    </div>
                    <div style={styles.michael}>
                      <div style={styles.icon_p}>
                        <img src={header_second_img3} alt="" />
                        <p>Student</p>
                      </div>
                      <div style={styles.icon_p}>
                        <p>7C</p>
                        <img src={student_icon} alt="" />

                      </div>
                      <div style={styles.icon_p}>
                        <p>3.3</p>
                      </div>
                      <div style={styles.icon_p}>
                        <img src={cell_performance} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <img src={cell_performance3} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <p>Status</p>
                        <img src={student_icon} alt="" />
                      </div>

                    </div>
                    <div style={styles.michael}>
                      <div style={styles.icon_p}>
                        <img src={header_second_img3} alt="" />
                        <p>Student</p>
                      </div>
                      <div style={styles.icon_p}>
                        <p>7D</p>
                        <img src={student_icon} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <p>2.4</p>
                      </div>
                      <div style={styles.icon_p}>
                        <img src={cell_performance1} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <img src={cell_performance3} alt="" />
                      </div>
                      <div style={styles.icon_p}>
                        <p>Status</p>
                        <img src={student_icon} alt="" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div></div>

          </div>
          <div style={styles.main_banner_text}>
            <div style={styles.main_banner_text_reyting}>
              <div style={styles.banner_scnd_f_text1_text2_t}>
                <h2 style={styles.banner_scnd_f_text1_text2_t_h2}>Academic Performance</h2>
                <button style={styles.banner_scnd_f_text1_text2_t_btn}>Last Semester</button>
              </div>
              <img className="chart_6" src={chart_6} alt="" />

            </div>
            <div>
              <div style={styles.main_banner_text_reyting}>
                <div style={styles.banner_scnd_f_text1_text2_t}>
                  <h2 style={styles.banner_scnd_f_text1_text2_t_h2}>Attendance Overview</h2>
                  <button style={styles.banner_scnd_f_text1_text2_t_btn}> This Week</button>
                </div>
                <img className="chart_8" src={chart_8} alt="" />

              </div>

            </div>
            <div></div>
          </div>


        </div>










      </div>

    </div>
  );
};

export default Students;