import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import { formatNumber } from 'src/modules/algorand/utils';
import Spinner from 'src/view/shared/Spinner';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import { images } from 'src/images/images';
import { NoteList, NoteModal } from 'src/view/algorand/components/Notes';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import noteActions from 'src/modules/note/noteActions';
import { useDispatch } from 'react-redux';

function PoolTable(props) {
  const { loading, pools, hasRows, sorter, doChangeSort } =
    props;
  const [openCreateModal, setOpenCreateModal] =
    useState(false);
  const [openNoteList, setOpenNoteList] = useState(false);
  const [id, setId] = useState(null);
  const [currentNote, setCurrentNote] = useState(null);
  const dispatch = useDispatch();

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);
  const onClickComment = (_id) => {
    setOpenCreateModal(true);
    setId(_id);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const onClickView = (_id) => {
    setOpenNoteList(true);
    setId(_id);
  };


  const handleCloseNostList = () => {
    setOpenNoteList(false);
  }

  const onDeleteNote = (d) => {
    setCurrentNote(d.id);
    setShowDeleteModal(true);
  }

  const onEditNote = (d) => {
    setCurrentNote(d);
    setOpenCreateModal(true);
  }

  const handleDeleteNote = () => {
    setShowDeleteModal(false);
    dispatch(noteActions.doDeletePoolNote(currentNote));
  }

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  }

  return (
    <div className="table-responsive " id="pool-table">
      <table className="table-hover table table-striped mt-2">
        <thead className="thead">
          <tr>
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name="name"
              label="NAME"
            />
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name="liquidity"
              label="LIQUIDITY"
            />
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name="lastDayVolume"
              label="VOLUME[24H]"
            />
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name="lastWeekVolume"
              label="VOLUME[7D]"
            />
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name="lastDayFees"
              label="FEES[24H]"
            />
            <TableColumnHeader name="more" label="NOTES" />
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={100}>
                <Spinner />
              </td>
            </tr>
          )}
          {!loading && !pools.length && (
            <tr>
              <td colSpan={100}>
                <div className="d-flex justify-content-center">
                  {i18n('table.noData')}
                </div>
              </td>
            </tr>
          )}
          {!loading &&
            pools.length > 0 &&
            pools.map((pool) => {
              let image1 =
                pool.assetOneId === 0
                  ? '/assets/asa-list/ALGO/icon.png'
                  : `https://algoexplorer.io/images/assets/big/light/${pool.assetOneId}.png`;
              for (let i = 0; i < images.length; i++) {
                const img = images[i];
                let id = parseInt(img.split('-')[1]);
                if (id == pool.assetOneId) {
                  image1 = `/assets/asa-list/${img}/icon.png`;
                  break;
                }
              }
              let image2 =
                pool.assetTwoId === 0
                  ? '/assets/asa-list/ALGO/icon.png'
                  : `https://algoexplorer.io/images/assets/big/light/${pool.assetTwoId}.png`;
              for (let i = 0; i < images.length; i++) {
                const img = images[i];
                let id = parseInt(img.split('-')[1]);
                if (id == pool.assetTwoId) {
                  image2 = `/assets/asa-list/${img}/icon.png`;
                  break;
                }
              }
              let iconColor =
                parseInt(pool.noteCount) == 0
                  ? '#7b78ff'
                  : '#ed3434';

              return (
                <tr key={pool.id}>
                  <td>
                    <Link
                      to={`/algorand/pools/${pool.address}`}
                    >
                      <img
                        src={image1}
                        style={{
                          width: 25,
                          marginRight: 10,
                          objectFit: 'contain',
                          float: 'left',
                        }}
                      ></img>
                      <img
                        src={image2}
                        style={{
                          width: 25,
                          marginRight: 10,
                          objectFit: 'contain',
                          float: 'left',
                        }}
                      ></img>
                      <h6>
                        {pool.assetOneUnitName}-
                        {pool.assetTwoUnitName}
                      </h6>
                    </Link>
                  </td>
                  <td>{formatNumber(pool.liquidity)}</td>
                  <td>
                    {formatNumber(pool.lastDayVolume)}
                  </td>
                  <td>
                    {formatNumber(pool.lastWeekVolume)}
                  </td>
                  <td>{formatNumber(pool.lastDayFees)}</td>
                  <td>
                    <button
                      className="app-dropdown user-dropdown"
                      role="button"
                      data-hide-on-body-scroll="data-hide-on-body-scroll"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                      data-toggle="dropdown"
                    >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 25.904 25.904"
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <g>
                              <rect
                                x="9.012"
                                y={12}
                                style={{ fill: iconColor }}
                                width={10}
                                height={2}
                              />
                              <path
                                style={{ fill: iconColor }}
                                d="M13.022,22H3.012c-0.551,0-1-0.449-1-1V4h20v8.435c0.414-0.203,0.867-0.322,1.343-0.322
				c0.224,0,0.443,0.028,0.657,0.075V3c0-1.657-1.344-3-3-3h-18c-1.656,0-3,1.343-3,3v18c0,1.656,1.344,3,3,3h9.425L13.022,22z"
                              />
                              <rect
                                x="9.012"
                                y={8}
                                style={{ fill: iconColor }}
                                width={10}
                                height={2}
                              />
                              <polygon
                                style={{ fill: iconColor }}
                                points="9.012,18 16.108,18 18.118,16 9.012,16 			"
                              />
                              <rect
                                x="5.012"
                                y={12}
                                style={{ fill: iconColor }}
                                width={2}
                                height={2}
                              />
                              <rect
                                x="5.012"
                                y={8}
                                style={{ fill: iconColor }}
                                width={2}
                                height={2}
                              />
                              <rect
                                x="5.012"
                                y={16}
                                style={{ fill: iconColor }}
                                width={2}
                                height={2}
                              />
                            </g>
                          </g>
                          <g>
                            <path
                              style={{ fill: iconColor }}
                              d="M25.576,15.934l-1.517-1.52c-0.418-0.421-1.094-0.424-1.507-0.009l-1.22,1.228l3.03,3.043
			l1.221-1.229C25.998,17.032,25.995,16.354,25.576,15.934z"
                            />
                            <path
                              style={{ fill: iconColor }}
                              d="M15.357,21.502c-0.067,0.055-0.124,0.123-0.15,0.213L14.15,25.33
			c-0.047,0.157-0.003,0.327,0.112,0.443c0.086,0.085,0.2,0.131,0.317,0.131c0.042,0,0.085-0.006,0.126-0.019l3.602-1.062
			c0.084-0.024,0.149-0.076,0.204-0.138l4.939-4.915l-3.163-3.175L15.357,21.502z M15.836,24.618l-0.422-0.425l0.599-2.047
			l1.532,0.316l0.303,1.562L15.836,24.618z"
                            />
                          </g>
                        </g>
                      </svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="bg-white dark__bg-1000 rounded-2 py-2 m-25">
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() =>
                            onClickComment(pool.id)
                          }
                        >
                          {i18n('note.create')}
                        </button>
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() =>
                            onClickView(pool.id)
                          }
                        >
                          {i18n('note.view')}
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {openCreateModal && (
        <NoteModal
          onClose={handleCloseCreateModal}
          cancelText={i18n('note.modal.cancel')}
          okText={i18n('note.modal.okText')}
          assetId={id}
          note={currentNote}
          isPoolNote={true}
        />
      )}
      {openNoteList && (
        <NoteList
          onClose={handleCloseNostList}
          cancelText={i18n('note.modal.cancel')}
          assetId={id}
          onDelete={onDeleteNote}
          onEdit={onEditNote}
          isPoolNote={true}
        />
      )}
      {showDeleteModal && (
        <ConfirmModal
          title={i18n('note.modal.delete_title')}
          okText={i18n('note.delete')}
          cancelText={i18n('note.modal.cancel')}
          onConfirm={handleDeleteNote}
          onClose={handleCloseDeleteModal}
        />
      )}
    </div>
  );
}

export default PoolTable;
