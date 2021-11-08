import React from 'react';
import { dummyReviews } from '../assets/Main';
import '../styles/landing/introThree.scss';

function IntroThree() {
  return (
    <div className="introThree">
      <div className="introThree_text scroll">
        <h2>
          직접 경험한 건강기능식품에&nbsp;
          <br />
          리뷰를 남겨주세요!
        </h2>
        <h6>
          건식이는 언제나 여러분의 생생하고 솔직한 후기를 기다리고 있습니다
        </h6>
      </div>
      <div className="container scroll">
        <div className="row">
          {dummyReviews.map((review) => (
            <div className="col-sm-1 col-md-2" key={review.id}>
              <div className="review-box">
                <div className="profile">
                  <img src={review.src} alt="profile" />
                  <div className="nickname">{review.nickname}</div>
                  <div className="createdAt">{review.date}</div>
                  <div className="stars">
                    <img src="/icons/icon_star_fill.svg" alt="star" />
                    <img src="/icons/icon_star_fill.svg" alt="star" />
                    <img src="/icons/icon_star_fill.svg" alt="star" />
                    <img src="/icons/icon_star_fill.svg" alt="star" />
                    <img src="/icons/icon_star_fill.svg" alt="star" />
                  </div>
                </div>
                <div className="content">
                  <div className="product">
                    <span className="desc">제품명</span>
                    <span className="name">{review.product}</span>
                  </div>
                  <div className="review">
                    {review.review}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="col-sm-1 col-md-2 col-lg-1">
            <div className="review-box">
              <div className="profile">
                <img src="/images/suyeon.png" alt="profile" />
                <div className="nickname">suyeon</div>
                <div className="createdAt">2021.10.03</div>
                <div className="stars">
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                </div>
              </div>
              <div className="content">
                <div className="product">
                  <span className="desc">제품명</span>
                  <span className="name">레모나</span>
                </div>
                <div className="review">
                  어린이, 임산부 및 수유부는 섭취를 피하시기 바랍니다.
                  간∙신장∙심장질환, 알레르기 및 천식이 있거나 의약품 복용 시
                  전문가와 상담하십시오. 이상 사례 발생 시 섭취를
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1 col-md-2 col-lg-1">
            <div className="review-box">
              <div className="profile">
                <img src="/images/sarah.png" alt="profile" />
                <div className="nickname">sarahsea</div>
                <div className="createdAt">2021.11.25</div>
                <div className="stars">
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                </div>
              </div>
              <div className="content">
                <div className="product">
                  <span className="desc">제품명</span>
                  <span className="name">프리미엄 프로폴리스</span>
                </div>
                <div className="review">
                  좀 피곤할 때나 감기가 올 것 같을 때는 프로폴리스 먹고 자면
                  괜찮아지는 것 같더라고요, 프로폴리스가 면역력 강화에 좋다고들
                  하는데 개인적으로 프로폴리스가 잘 맞는 편인 것 같아서 애용하고
                  있습니다
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="review-box">
              <div className="profile">
                <img src="/images/doldolma.png" alt="profile" />
                <div className="nickname">doldolma</div>
                <div className="createdAt">2021.11.17</div>
                <div className="stars">
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                </div>
              </div>
              <div className="content">
                <div className="product">
                  <span className="desc">제품명</span>
                  <span className="name">슬림듀</span>
                </div>
                <div className="review">
                  어린이, 임산부 및 수유부는 섭취를 피하시기 바랍니다.
                  간∙신장∙심장질환, 알레르기 및 천식이 있거나 의약품 복용 시
                  전문가와 상담하십시오. 이상 사례 발생 시 섭취를
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1 col-md-2 col-lg-1">
            <div className="review-box">
              <div className="profile">
                <img src="/images/hoony.png" alt="profile" />
                <div className="nickname">hoony</div>
                <div className="createdAt">2021.10.31</div>
                <div className="stars">
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                  <img src="/icons/icon_star_fill.svg" alt="star" />
                </div>
              </div>
              <div className="content">
                <div className="product">
                  <span className="desc">제품명</span>
                  <span className="name">슬림듀</span>
                </div>
                <div className="review">
                  어린이, 임산부 및 수유부는 섭취를 피하시기 바랍니다.
                  간∙신장∙심장질환, 알레르기 및 천식이 있거나 의약품 복용 시
                  전문가와 상담하십시오. 이상 사례 발생 시 섭취를
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default IntroThree;
