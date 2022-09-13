import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói về BookingCare
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/FyDQljKtWnI" title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            BookingCare là nền tảng tập trung vào việc đặt khám chuyên khoa,
                            kết nối bệnh nhân với bác sĩ, cơ sở y tế và giúp trải nghiệm đi khám của người bệnh được tốt hơn,
                            hiệu quả hơn. Đồng thời, góp phần giải quyết vấn đề quá tải của các bệnh viện hiện nay.
                        </p>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
