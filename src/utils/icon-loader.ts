import {
  library,
  IconName,
  findIconDefinition,
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  prefix as brandPrefix,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMoneyBillWave,
  faTasks,
  faSignLanguage,
  prefix as basePrefix,
} from '@fortawesome/free-solid-svg-icons';

export const loadIcons = () =>
  library.add(faGithub, faEnvelope, faMoneyBillWave, faTasks, faSignLanguage);

export const getIconDefinition = (
  iconName: IconName,
): IconDefinition | null => {
  return [brandPrefix, basePrefix].reduce(
    (acc: IconDefinition | null, prefix) => {
      return acc || findIconDefinition({ prefix, iconName });
    },
    null,
  );
};
