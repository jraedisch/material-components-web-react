// The MIT License
//
// Copyright (c) 2018 Google, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import * as React from 'react';
import * as classnames from 'classnames';
// @ts-ignore
import ActionButtons from './ActionButtons.tsx';
// @ts-ignore
import ActionIcons from './ActionIcons.tsx';
// @ts-ignore
import Actions from './Actions.tsx';
// @ts-ignore
import PrimaryContent from './PrimaryContent.tsx';
// @ts-ignore
import Media from './Media.tsx';

export type CardProps = {
  className?: string,
  outlined?: boolean
} & React.HTMLProps<HTMLDivElement>;

const Card: React.FunctionComponent<CardProps> = ({
  children, className = '', outlined = false, ...otherProps // eslint-disable-line react/prop-types
}) => {
  const classes = classnames('mdc-card', className, {
    'mdc-card--outlined': outlined,
  });
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export {
  ActionButtons as CardActionButtons,
  ActionIcons as CardActionIcons,
  Actions as CardActions,
  PrimaryContent as CardPrimaryContent,
  Media as CardMedia,
};

export default Card;