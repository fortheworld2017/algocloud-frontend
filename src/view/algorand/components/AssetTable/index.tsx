import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import { formatNumber, formatPercent } from 'src/modules/algorand/utils';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import Spinner from 'src/view/shared/Spinner';
import { images } from 'src/images/images';
import { NoteList, NoteModal } from 'src/view/algorand/components/Notes';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import noteActions from 'src/modules/note/noteActions';
import { useDispatch } from 'react-redux';

function AssetTable(props) {
  const {
    loading,
    assets,
    favoriteIds,
    showcaseId,
    togglePermission,
    showcasePermission,
    hasRows,
    sorter,
    doChangeSort,
    setToogleId,
    setShowcaseId,
  } = props;

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openNoteList, setOpenNoteList] = useState(false);
  const [id, setId] = useState(null);
  const [currentNote, setCurrentNote] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const onClickComment = (_id) => {
    setOpenCreateModal(true);
    setId(_id)
  }

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  }

  const onClickView = (_id) => {
    setOpenNoteList(true);
    setId(_id)
  }

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
    dispatch(noteActions.doDeleteNote(currentNote));
  }

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover table-striped mt-2">
        <thead className="thead">
          <tr>
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name='name'
              label='NAME'
            />
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name='unitName'
              label='SYMBOL'
            />
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name='marketCap'
              label='MCAP'
            />
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name='liquidity'
              label='LIQUIDITY'
            />
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name='lastDayVolume'
              label='VOL[24H]'
            />
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name='price'
              label='PRICE'
            />
            <TableColumnHeader
              onSort={doChangeSort}
              hasRows={hasRows}
              sorter={sorter}
              name='lastDayPriceChange'
              label='24H %'
            />
            <TableColumnHeader
              name='favorite'
              label='FAVORITE'
            />
            <TableColumnHeader
              name='showcase'
              label='SHOWCASE'
            />
            <TableColumnHeader
              name='more'
              label='NOTES'
            />
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
          {!loading && !assets.length && (
            <tr>
              <td colSpan={100}>
                <div className="d-flex justify-content-center">
                  {i18n('table.noData')}
                </div>
              </td>
            </tr>
          )}
          {!loading && (assets.length > 0) && assets.map((asset) => {
            let image = asset.assetId === 0 ? '/assets/asa-list/ALGO/icon.png' : `https://algoexplorer.io/images/assets/big/light/${asset.assetId}.png`;
            for (let i = 0; i < images.length; i++) {
              const img = images[i];
              let id = parseInt(img.split('-')[1]);
              if (id == asset.assetId) {
                image = `/assets/asa-list/${img}/icon.png`;
                break;
              }
            }            
            let iconColor = parseInt(asset.noteCount) == 0 ? '#7b78ff' : '#ed3434'
            return (
              <tr key={asset.id}>
                <td>
                  <Link to={`/algorand/assets/${asset.assetId}`}>
                    <img src={image} style={{ width: 25, marginRight: 10, objectFit: 'contain', float: 'left' }}></img>
                    <h6 className='table-algo-title'>{asset.name}</h6>
                  </Link>
                </td>
                <td><b>{asset.unitName}</b></td>
                <td>{formatNumber(asset.marketCap)}</td>
                <td>{formatNumber(asset.liquidity)}</td>
                <td>{formatNumber(asset.lastDayVolume)}</td>
                <td>{formatNumber(asset.price)}</td>
                <td>
                  <span className={(parseFloat(formatPercent(asset.lastDayPriceChange)) < 0) ? 'text-danger' : 'text-success'}>{formatPercent(asset.lastDayPriceChange)}
                    {asset.lastDayPriceChange ? (parseFloat(formatPercent(asset.lastDayPriceChange)) < 0) ? <span>{'  '}<i
                      className={`fas fa-arrow-down`}
                    ></i></span> : <span>{'  '}<i
                      className={`fas fa-arrow-up`}
                    ></i></span> : ''}
                  </span>
                </td>
                <td>
                  {togglePermission && (
                    <button
                      className="btn btn-algocloud-default me-1 mb-1"
                      onClick={() =>
                        setToogleId(asset.assetId)
                      }
                    >
                      <b>{favoriteIds.includes(asset.assetId) ? <div><svg className="svg-inline--fa fa-minus fa-w-14 me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>Unfavorite</div> : <div><svg className="svg-inline--fa fa-plus fa-w-14 me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>Favorite</div>}</b>
                    </button>
                  )}
                </td>
                <td>
                  {showcasePermission && (
                    <button
                      className="btn btn-algocloud-default me-1 mb-1"
                      disabled={asset.assetId === showcaseId}
                      onClick={() =>
                        setShowcaseId(asset.assetId)
                      }
                    >
                      <b>{asset.assetId === showcaseId ? 'Currently Set' : 'Set As Main'}</b>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="app-dropdown user-dropdown"
                    role="button" data-hide-on-body-scroll="data-hide-on-body-scroll" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                    data-toggle="dropdown"
                  >
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25.904 25.904" xmlSpace="preserve">
                      <g>
                        <g>
                          <g>
                            <rect x="9.012" y={12} style={{ fill: iconColor }} width={10} height={2} />
                            <path style={{ fill: iconColor }} d="M13.022,22H3.012c-0.551,0-1-0.449-1-1V4h20v8.435c0.414-0.203,0.867-0.322,1.343-0.322
				c0.224,0,0.443,0.028,0.657,0.075V3c0-1.657-1.344-3-3-3h-18c-1.656,0-3,1.343-3,3v18c0,1.656,1.344,3,3,3h9.425L13.022,22z" />
                            <rect x="9.012" y={8} style={{ fill: iconColor }} width={10} height={2} />
                            <polygon style={{ fill: iconColor }} points="9.012,18 16.108,18 18.118,16 9.012,16 			" />
                            <rect x="5.012" y={12} style={{ fill: iconColor }} width={2} height={2} />
                            <rect x="5.012" y={8} style={{ fill: iconColor }} width={2} height={2} />
                            <rect x="5.012" y={16} style={{ fill: iconColor }} width={2} height={2} />
                          </g>
                        </g>
                        <g>
                          <path style={{ fill: iconColor }} d="M25.576,15.934l-1.517-1.52c-0.418-0.421-1.094-0.424-1.507-0.009l-1.22,1.228l3.03,3.043
			l1.221-1.229C25.998,17.032,25.995,16.354,25.576,15.934z" />
                          <path style={{ fill: iconColor }} d="M15.357,21.502c-0.067,0.055-0.124,0.123-0.15,0.213L14.15,25.33
			c-0.047,0.157-0.003,0.327,0.112,0.443c0.086,0.085,0.2,0.131,0.317,0.131c0.042,0,0.085-0.006,0.126-0.019l3.602-1.062
			c0.084-0.024,0.149-0.076,0.204-0.138l4.939-4.915l-3.163-3.175L15.357,21.502z M15.836,24.618l-0.422-0.425l0.599-2.047
			l1.532,0.316l0.303,1.562L15.836,24.618z" />
                        </g>
                      </g>
                    </svg>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="bg-white dark__bg-1000 rounded-2 py-2 m-25">
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => onClickComment(asset.assetId)}
                      >
                        {i18n('note.create')}
                      </button>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => onClickView(asset.assetId)}
                      >
                        {i18n('note.view')}
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {
        openCreateModal && (
          <NoteModal
            onClose={handleCloseCreateModal}
            cancelText={i18n('note.modal.cancel')}
            okText={i18n('note.modal.okText')}
            assetId={id}
            note={currentNote}
          />
        )
      }
      {
        openNoteList && (
          <NoteList
            onClose={handleCloseNostList}
            cancelText={i18n('note.modal.cancel')}
            assetId={id}
            onDelete={onDeleteNote}
            onEdit={onEditNote}
          />
        )
      }
      {
        showDeleteModal && (
          <ConfirmModal
            title={i18n('note.modal.delete_title')}
            okText={i18n('note.delete')}
            cancelText={i18n('note.modal.cancel')}
            onConfirm={handleDeleteNote}
            onClose={handleCloseDeleteModal}
          />
        )
      }
    </div>
  );
}

export default AssetTable;
