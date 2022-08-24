import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import noteSelectors from 'src/modules/note/noteSelectors';
import { NoteCardContainer, NoteTitle, NoteDescription, NoteHeader, FormattedDate, NoWrapContainer } from 'src/view/algorand/styled';
import Spinner from 'src/view/shared/Spinner';

export const NoteCard = (props) => {

    const loading = useSelector(noteSelectors.selectLoading);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!loading) {
            setIsDeleting(false);
        }
    }, [loading])

    const onClickDelete = () => {
        setIsDeleting(true);
        props.onDelete()
    }

    return (
        <React.Fragment>
            <NoteCardContainer>
                <NoteHeader>
                    <NoteTitle>
                        {
                            loading && isDeleting && (
                                <Spinner style={{ marginTop: 0, marginBottom: 0, display: 'inline', }} color="success" spin="sm" />
                            )
                        }
                        {props.note.title}
                    </NoteTitle>
                    <NoWrapContainer>
                        <FormattedDate>
                            {moment(props.note.createdAt).fromNow()}
                        </FormattedDate>
                        <div className="avatar-dropdown dropdown">
                            <button
                                className="app-dropdown user-dropdown"
                                role="button" data-hide-on-body-scroll="data-hide-on-body-scroll" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                                data-toggle="dropdown"
                            >
                                <i className='fas fa-ellipsis-v'></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="bg-white dark__bg-1000 rounded-2 py-2 m-25">
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        onClick={props.onEdit}
                                    >
                                        <i className="fas fa-edit" /> &emsp;
                                        {i18n('note.edit')}
                                    </button>
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        onClick={onClickDelete}
                                    >
                                        <i className="fas fa-trash" /> &emsp;
                                        {i18n('note.delete')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </NoWrapContainer>
                </NoteHeader>
                <NoteDescription>
                    {props.note.description}
                </NoteDescription>

            </NoteCardContainer>
        </React.Fragment>
    )
}
