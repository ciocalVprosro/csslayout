import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <div style={{ flexShrink: 0 }}>
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            padding: '8px',
                            width: '100%',
                        }}
                    >
                        <div style={{ width: '16px' }}>
                            <Line />
                        </div>
                        <div style={{ marginLeft: 'auto', width: '16px' }}>
                            <Line />
                        </div>
                        <div style={{ marginLeft: '4px', width: '16px' }}>
                            <Line />
                        </div>
                    </div>
                    <Line />
                </div>
                <div
                    style={{
                        borderRight: '1px solid #d1d5db',
                        borderWidth: '4px',
                        flexGrow: 1,
                    }}
                >
                    <div style={{ padding: '8px' }}>
                        <div style={{ marginBottom: '8px', width: '64px' }}>
                            <Line />
                        </div>
                        <div style={{ marginBottom: '8px', width: '64px' }}>
                            <Line />
                        </div>
                        <div style={{ width: '32px' }}>
                            <Line />
                        </div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
