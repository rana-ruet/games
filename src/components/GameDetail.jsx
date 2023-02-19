import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { smallImage, getPlatform, getStars } from '../utils';

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  const { detail, screen, isLoading } = useSelector((state) => state.gameDetail);

  const handleClick = () => {
    navigate('/');
    document.body.style.overflow = 'auto';
  };

  return createPortal(
    <CardShadow onClick={handleClick}>
      {isLoading ? null : (
        <Detail layoutId={pathId} layout layoutRoot onClick={(e) => e.stopPropagation()}>
          <Stats>
            <div className='rating'>
              <motion.h3 layoutId={`title ${pathId}`}>{detail.name}</motion.h3>
              <p>Rating: {detail.rating}</p>
              {getStars(detail.rating)}
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {detail.parent_platforms.map((data) => (
                  <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name} />
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <motion.img
              layoutId={`image ${pathId}`}
              src={smallImage(detail.background_image, 1280)}
              alt={detail.background_image}
            />
          </Media>
          <Description>
            <p>{detail.description_raw}</p>
          </Description>
          <div className='gallery'>
            {screen.results.map((screen) => (
              <img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image} />
            ))}
          </div>
        </Detail>
      )}
    </CardShadow>,
    document.getElementById('portal')
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 1.5rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
