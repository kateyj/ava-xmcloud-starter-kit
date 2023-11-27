import { ContentHorizontalCard } from 'components/card/variants/content-horizontal/ContentHorizontal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContentHorizontalCard> = {
  title: 'Components/Card/Content Horizontal',
  component: ContentHorizontalCard,
};

export default meta;
type Story = StoryObj<typeof ContentHorizontalCard>;

export const DefaultView: Story = {
  render: () => (
    <ContentHorizontalCard
      params={{ name: 'link__button-primary' }}
      fields={{
        data: {
          datasource: {
            id: '64E7DC21D2A34753A55AC4CC37F5F2B0',
            link: {
              jsonValue: {
                value: {
                  href: 'https://ktm.com',
                  text: 'View All Case Studies',
                  linktype: 'external',
                  url: 'https://ktm.com',
                  anchor: '',
                  title: 'View All Case Studies',
                  target: '',
                },
              },
            },
            body: {
              jsonValue: {
                value:
                  'New business models are bringing players and providers together for a connected home health experience...',
              },
            },
            iconCard: {
              jsonValue: {
                value: {},
              },
            },
            image: {
              jsonValue: {
                value: {
                  src: 'https://xmcloudcm.localhost/-/media/project/avanade/avanade/dev/rebecca-milton.jfif?h=1024&iar=0&w=1024&hash=8A5E3ACF5ACE0F19A7518F69B5649C00',
                  alt: 'Rebecca Milton',
                  width: '1024',
                  height: '1024',
                },
              },
            },
            title: {
              jsonValue: {
                value: 'Enhance the provider and member experience',
              },
            },
            subTitle: {
              jsonValue: {
                value: 'Podcast',
              },
            },
            video: {
              targetItem: {
                id: '2A8B06D35FD44A8E966F90686F75C665',
                brightcovePlayer: {
                  targetItem: {
                    id: '2D4E125DF82A49C2BEEFBF7747A84A1C',
                    playerKey: {
                      jsonValue: {
                        value: 'SJXTqvOM',
                      },
                    },
                  },
                },
                brightcoveItem: {
                  targetItem: {
                    id: '31210D42B5BF4AEC901C054C250F40B9',
                    brightcoveID: {
                      jsonValue: {
                        value: '6314537823112',
                      },
                    },
                    brightcoveName: {
                      jsonValue: {
                        value: 'mstest',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }}
    />
  ),
};
