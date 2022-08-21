import { useState } from 'react';
import { ReactComponent as LinkInIcon } from '../../images/svg-list-icon/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../images/svg-list-icon/github.svg';
import { ReactComponent as CloseIcon } from '../../images/svg-list-icon/close.svg';

import team from '../../images/svg-list-icon/teamwork.png';

import vova from '../../images/team/vova.jpg';
import ira from '../../images/team/ira.jpg';
import lika from '../../images/team/lika.jpg';
import roma from '../../images/team/roma.jpg';
import sanya from '../../images/team/sanya.jpg';
import vanya from '../../images/team/vanya.jpg';
import vel from '../../images/team/vel.jpg';
import seva from '../../images/team/no-avatar.jpeg';

import s from './ModalTeam.module.css';

export const ModalTeam = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className={s.backdrop}>
          <div className={s.team__container}>
            {/* <h2 className={s.team__title}>OUR TEAM</h2> */}
            <CloseIcon
              className={s.close__icon}
              onClick={() => {
                setOpen(!open);
              }}
            />
            <div className={s.card__wrapper}>
              <div className={s.card}>
                <img src={vova} alt="1" className={s.img} />
              </div>
              <div className={s.title__container}>
                <h3 className={s.member__title}>Volodymyr</h3>
                <p className={s.role__text}>Team Lead</p>
              </div>
              <ul className={s.social__list}>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://github.com/Mr-Nihility"
                    target="blank"
                  >
                    <GitHubIcon className={s.github} />
                  </a>
                </li>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://www.linkedin.com/in/volodymyr-romanenko-b0b15b243/"
                    target="blank"
                  >
                    <LinkInIcon className={s.linkin} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.card__wrapper}>
              <div className={s.card}>
                <img src={ira} alt="1" className={s.img} />
              </div>
              <div className={s.title__container}>
                <h3 className={s.member__title}>Irina</h3>
                <p className={s.role__text}>Scrum Master</p>
              </div>
              <ul className={s.social__list}>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://github.com/IrynaSabinina"
                    target="blank"
                  >
                    <GitHubIcon className={s.github} />
                  </a>
                </li>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://www.linkedin.com/feed/"
                  >
                    <LinkInIcon className={s.linkin} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.card__wrapper}>
              <div className={s.card}>
                <img src={lika} alt="1" className={s.img} />
              </div>
              <div className={s.title__container}>
                <h3 className={s.member__title}>Lika</h3>
                <p className={s.role__text}>Developer</p>
              </div>
              <ul className={s.social__list}>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://github.com/LikaRos"
                    target="blank"
                  >
                    <GitHubIcon className={s.github} />
                  </a>
                </li>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://www.linkedin.com/in/lika-rossinskaya-055b07183/"
                    target="blank"
                  >
                    <LinkInIcon className={s.linkin} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.card__wrapper}>
              <div className={s.card}>
                <img src={roma} alt="1" className={s.img} />
              </div>
              <div className={s.title__container}>
                <h3 className={s.member__title}>Roman</h3>
                <p className={s.role__text}>Developer</p>
              </div>
              <ul className={s.social__list}>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://github.com/RoRomario360"
                    target="blank"
                  >
                    <GitHubIcon className={s.github} />
                  </a>
                </li>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://www.linkedin.com/in/roman-merkulov-857041241/"
                    target="blank"
                  >
                    <LinkInIcon className={s.linkin} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.card__wrapper}>
              <div className={s.card}>
                <img src={sanya} alt="1" className={s.img} />
              </div>
              <div className={s.title__container}>
                <h3 className={s.member__title}>Alexandr</h3>
                <p className={s.role__text}>Developer</p>
              </div>
              <ul className={s.social__list}>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://github.com/Sinbew"
                    target="blank"
                  >
                    <GitHubIcon className={s.github} />
                  </a>
                </li>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://www.linkedin.com/in/alexandr-raskulov/"
                    target="blank"
                  >
                    <LinkInIcon className={s.linkin} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.card__wrapper}>
              <div className={s.card}>
                <img src={vanya} alt="1" className={s.img} />
              </div>
              <div className={s.title__container}>
                <h3 className={s.member__title}>Ivan</h3>
                <p className={s.role__text}>Developer</p>
              </div>
              <ul className={s.social__list}>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://github.com/Jasper935"
                    target="blank"
                  >
                    <GitHubIcon className={s.github} />
                  </a>
                </li>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://www.linkedin.com/in/ivan-pikun-94367423b/"
                    target="blank"
                  >
                    <LinkInIcon className={s.linkin} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.card__wrapper}>
              <div className={s.card}>
                <img src={vel} alt="1" className={s.img} />
              </div>
              <div className={s.title__container}>
                <h3 className={s.member__title}>Valentin</h3>
                <p className={s.role__text}>Developer</p>
              </div>
              <ul className={s.social__list}>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://github.com/Val-Belous"
                    target="blank"
                  >
                    <GitHubIcon className={s.github} />
                  </a>
                </li>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://www.linkedin.com/in/val-belous/"
                    target="blank"
                  >
                    <LinkInIcon className={s.linkin} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.card__wrapper}>
              <div className={s.card}>
                <img src={seva} alt="1" className={s.img} />
              </div>
              <div className={s.title__container}>
                <h3 className={s.member__title}>Vsevolod</h3>
                <p className={s.role__text}>Developer</p>
              </div>
              <ul className={s.social__list}>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://github.com/VsevolodZharkov"
                    target="blank"
                  >
                    <GitHubIcon className={s.github} />
                  </a>
                </li>
                <li className={s.list__item}>
                  <a
                    className={s.social__link}
                    href="https://www.linkedin.com/feed/"
                  >
                    <LinkInIcon className={s.linkin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className={s.btn__container}>
        <img
          type="button"
          src={team}
          className={s.team__icon}
          onClick={() => {
            setOpen(!open);
          }}
          alt="1"
        />
      </div>
    </>
  );
};
