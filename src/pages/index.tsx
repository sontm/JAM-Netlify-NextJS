import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    impressBG: {
      backgroundImage: `url(${"images/qlx/banner.png"})`, // Put to public
      height: "650px",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    },
    thumb1: {
      background: "#0181f5",
      /* Old browsers */
      //background: "-moz-linear-gradient(left, #0181f5 0%, #5db2ff 100%)",
      /* FF3.6-15 */
      //background: "-webkit-linear-gradient(left, #0181f5 0%, #5db2ff 100%)",
      /* Chrome10-25,Safari5.1-6 */
      //background: "linear-gradient(to right, #0181f5 0%, #5db2ff 100%)",
      /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0181f5', endColorstr='#5db2ff',GradientType=1 )",
      /* IE6-9 */
      width: "110px",
      height: "110px",
      textAlign: "center",
      lineHeight: "110px",
      borderRadius: "20px",
      margin: "0 auto 30px auto"
    },
    thumb2: {
      background: "#fdae5c",
      /* Old browsers */
      //background: "-moz-linear-gradient(left, #fdae5c 0%, #fd8e5e 100%)",
      /* FF3.6-15 */
      //background: "-webkit-linear-gradient(left, #fdae5c 0%, #fd8e5e 100%)",
      /* Chrome10-25,Safari5.1-6 */
      //background: "linear-gradient(to right, #fdae5c 0%, #fd8e5e 100%)",
      /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#fdae5c', endColorstr='#fd8e5e',GradientType=1 )",
      /* IE6-9 */
      width: "110px",
      height: "110px",
      textAlign: "center",
      lineHeight: "110px",
      borderRadius: "20px",
      margin: "0 auto 30px auto",
    },
    thumb3: {
      background: "#37ef8d",
    /* Old browsers */
     /* background: "-moz-linear-gradient(left, #37ef8d 0%, #37ef8d 100%)",*/
    /* FF3.6-15 */
    /* background: "-webkit-linear-gradient(left, #37ef8d 0%, #37ef8d 100%)",*/
    /* Chrome10-25,Safari5.1-6 */
    //background: "linear-gradient(to right, #37ef8d 0%, #37ef8d 100%)",
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#37ef8d', endColorstr='#37ef8d',GradientType=1 )",
      /* IE6-9 */
      width: "110px",
      height: "110px",
      textAlign: "center",
      lineHeight: "110px",
      borderRadius: "20px",
      margin: "0 auto 30px auto",
    }
  }),
);


export default function Index() {
  const classes = useStyles();
  return (
    <Layout isFullWidth={true} bgColor={"white"}>
      <div className={classes.impressBG}>
      <Grid container spacing={0} style={{alignItems: "center"}}>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <Typography variant="h3" component="h2" gutterBottom style={{color: "white"}}>
            Quản Lý Ôtô, Xe Máy
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom style={{color: "white"}}>
          Theo Dõi Chi Tiêu Theo Cá Nhân/Đội Nhóm
          </Typography>
          < br/>
          <Button href="https://play.google.com/store/apps/details?id=com.sansan.VehicleCMS" target="_blank"
              style={{padding: "3px 0px 3px 5px", width: "350px", backgroundColor:"black", justifyContent: "flex-start", fontSize:"17px"}}>
              <img src={"/images/android.png"} alt="android" style={{width: 48, height: 48}}/>
              <p style={{color: "white"}}>Tải Về cho Google Android</p>
          </Button>
          < br/>
          < br/>
          <Button href="https://apps.apple.com/app/id1498085260" target="_blank"
              style={{padding: "3px 0px 3px 5px", width: "350px", backgroundColor:"black", justifyContent: "flex-start", fontSize:"17px"}}>
              <img src={"/images/apple.png"} alt="android" style={{width: 48, height: 48}}/>
              <p style={{color: "white"}}>Tải Về cho Apple iOS</p>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <div style={{position: "relative", top: 100}}>
              <img src={"/images/qlx/phone.png"} alt=""/>
          </div>
        </Grid>
        </Grid>

        <Grid item xs={1} />
      </div>

      <div style={{padding: "168px 0 60px"}}>
        <Grid container spacing={0} style={{alignItems: "center"}}>
          <Grid item xs={1} />
          <Grid item xs>
            <div style={{textAlign: "center"}}>
                <div className={classes.thumb1}>
                  <img src={"/images/qlx/2.svg"} alt="" style={{verticalAlign: "middle"}}/>
                </div>
                <Typography variant="h6" component="h4" gutterBottom>
                Quản lí theo Cá Nhân hoặc Nhóm/Gia Đình ...
                </Typography>
            </div>
          </Grid>
          <Grid item xs>
            <div style={{textAlign: "center"}}>
                <div className={classes.thumb2}>
                  <img src={"/images/qlx/1.svg"} alt="" style={{verticalAlign: "middle"}}/>
                </div>
                <Typography variant="h6" component="h4" gutterBottom>
                  Đồng Bộ với Máy Chủ
                </Typography>
            </div>
          </Grid>
          <Grid item xs>
            <div style={{textAlign: "center"}}>
                <div className={classes.thumb3}>
                  <img src={"/images/qlx/3.svg"} alt="" style={{verticalAlign: "middle"}}/>
                </div>
                <Typography variant="h6" component="h4" gutterBottom>
                  Hoàn Toàn Miễn Phí
                </Typography>
            </div>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>


      <div style={{paddingTop: "50px"}}>
        <Grid container spacing={0} style={{alignItems: "center"}}>
          <Grid item xs={1} />
          <Grid item xs>
            <div style={{textAlign: "center"}}>
              <img src={"/images/qlx/phone1.png"} alt="" style={{alignSelf: "center"}}/>
            </div>
          </Grid>
          <Grid item xs>
            <div style={{textAlign: "center"}}>
              <img src={"/images/qlx/phone2.png"} alt="" />
            </div>
          </Grid>
          <Grid item xs>
            <div style={{textAlign: "center"}}>
              <img src={"/images/qlx/phone3.png"} alt="" />
            </div>
          </Grid>
          <Grid item xs={1} />
        </Grid>


        <div>
          <Grid container spacing={3} style={{alignItems: "center"}}>
            <Grid item xs={1} />
            <Grid item xs>
              <div style={{textAlign: "center"}}>
                  <Typography variant="h6" component="h4" gutterBottom>
                  Quản Lý Dữ Liệu Thiết Yếu
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Hiệu suất Xăng/Quãng đường di chuyển, Phụ chi (tiền phạt, cầu đường, gửi xe, rửa xe), 
                      Sổ bảo dưỡng định kì, Pháp lý (Đăng Kiểm, Bảo Hiểm, Bảo Trì Đường Bộ)
                  </Typography>
              </div>
            </Grid>
            <Grid item xs>
              <div style={{textAlign: "center"}}>
                  <Typography variant="h6" component="h4" gutterBottom>
                  Quản Lý Theo Cá Nhân
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Chi tiêu theo thời gian, phân bố các khoảng chi tiêu, nhắc nhở lịch đăng kiểm.
                  </Typography>
              </div>
            </Grid>
            <Grid item xs>
              <div style={{textAlign: "center"}}>
                  <Typography variant="h6" component="h4" gutterBottom>
                  Quản Lý Theo Nhóm
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    So sánh chi tiêu/hiệu suất các xe, tổng chi tiêu của nhóm, nhắc nhở lịch đăng kiểm cho toàn Nhóm.
                  </Typography>
              </div>
            </Grid>

            <Grid item xs={1} />
          </Grid>
        </div>
      </div>


      <div style={{padding: "77px 0 90px 0"}}>
            <div style={{padding: "90px 0"}}>
              <Grid container spacing={0} style={{alignItems: "center"}}>
                <Grid item xs={1} />
                <Grid item xs={4}>
                    <div>
                      <Typography variant="h6" component="h4" gutterBottom>
                        Báo Cáo/Đồ Thị đa dạng</Typography>
                      <Typography variant="body1" gutterBottom>
                        Giao diện thân thiện, đăng nhập với Google/Facebook, đồng bộ với máy chủ
                      </Typography>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <img src={"/images/qlx/charts.png"} alt="" style={{width: "100%"}}/>
                    </div>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </div>
            <div style={{padding: "90px 0"}}>
              <Grid container spacing={0} style={{alignItems: "center"}}>
                <Grid item xs={1} />
                <Grid item xs={6}>
                  <div>
                      <img src={"/images/qlx/phone4.png"} alt=""/>
                  </div>
                </Grid>
                <Grid item xs={4}>
                    <div>
                      <Typography variant="h6" component="h4" gutterBottom>Theo dõi lich bảo dưỡng</Typography>
                        <ul>
                            <li> <Typography variant="body1" gutterBottom>Thiết lập bộ phận bảo dưỡng. </Typography></li>
                            <li> <Typography variant="body1" gutterBottom>Xem thời điểm, quãng đường tại mỗi lần bảo dưỡng.</Typography></li>
                            <li> <Typography variant="body1" gutterBottom>Tuỳ chọn, sử dụng cho cả Ôtô, Xe máy.</Typography></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </div>
      </div>
    </Layout>
  );
}
