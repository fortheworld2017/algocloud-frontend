import React from 'react';
import RCPagination from 'rc-pagination';
import { getLanguage } from 'src/i18n';
import PaginationWrapper from 'src/view/shared/table/styles/PaginationWrapper';
import { i18n } from 'src/i18n';
import PropTypes from 'prop-types';

const arrowPath =
  'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h' +
  '-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v' +
  '60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91' +
  '.5c1.9 0 3.8-0.7 5.2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';

const doublePath = [
  'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6' +
  '.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1c-4.1 5.2-0' +
  '.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.' +
  '1c9.1-11.7 9.1-27.9 0-39.5z',
  'M837.2 492.3L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6' +
  '.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1c-4.1 5.2-0' +
  '.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.' +
  '1c9.1-11.7 9.1-27.9 0-39.5z',
];


const Pagination = (props) => {
  const onChange = (current, pageSize) => {
    props.onChange({
      current: Number(current),
      pageSize: Number(pageSize),
    });
  };

  const locale = getLanguage().dictionary.pagination;
  const { pagination, disabled, showTotal } = props;
  const { current, pageSize, total } = pagination;


  const getSvgIcon = (path, reverse, type) => {
    const paths = Array.isArray(path) ? path : [path];
    const renderPaths = paths.map((p, i) => {
      return <path key={i} d={p} />;
    });
    return (
      <i
        className={`custom-icon-${type}`}
        style={{
          fontSize: '16px',
        }}
      >
        <svg
          viewBox="0 0 1024 1024"
          width="1em"
          height="1em"
          fill="currentColor"
          style={{
            verticalAlign: '-.125em',
            transform: `rotate(${(reverse && 180) || 0}deg)`,
          }}
        >
          {renderPaths}
        </svg>
      </i>
    );
  };

  const nextIcon = getSvgIcon(arrowPath, false, 'next');
  const prevIcon = getSvgIcon(arrowPath, true, 'prev');

  const iconsProps = {
    prevIcon, nextIcon
  }


  return (
    <PaginationWrapper>
      <RCPagination
        simple
        pageSize={Number(pageSize)}
        current={current}
        onChange={onChange}
        total={total}
        locale={locale}
        showTotal={showTotal || undefined}
        {...iconsProps}
      />

      {/* <select
        style={{
          width: 'auto',
        }}
        disabled={!total || disabled}
        className="ml-2 form-control form-control-sm"
        value={Number(pageSize)}
        onChange={(event) =>
          onChange(1, event.target.value)
        }
      >
        <option value={10}>
          10 {i18n('pagination.items_per_page')}
        </option>
        <option value={20}>
          20 {i18n('pagination.items_per_page')}
        </option>
        <option value={30}>
          30 {i18n('pagination.items_per_page')}
        </option>
        <option value={40}>
          40 {i18n('pagination.items_per_page')}
        </option>
      </select> */}
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  showTotal: PropTypes.func,
};

export default Pagination;
