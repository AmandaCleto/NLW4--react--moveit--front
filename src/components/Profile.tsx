
import { useContext } from 'react';
import Avatar from "boring-avatars";
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>

          <Avatar
            size={80}
            name="Amanda Cleto"
            variant="beam"
            colors={["#C271B4", "#146A7C",  "#A3A948", "#EDB92E", "#CE1836"]}
          />

          <div>
            <strong>Amanda Cleto</strong>

            <p>
              <img src="icons/level.svg" alt="level"/>
             level {level}
            </p>
          </div>
        </div>
    )
}