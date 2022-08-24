import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import Spinner from 'src/view/shared/Spinner';
import assetShowActions from 'src/modules/algorand/asset/show/assetShowActions';
import { uniqueId } from 'lodash';
import noteActions from 'src/modules/note/noteActions';
import { useDispatch, useSelector } from 'react-redux';
import selector from 'src/modules/note/noteSelectors';
import {
  SectionTitle,
  SectionTitleBar,
} from 'src/view/algorand/styled';
import { NoNotes } from 'src/view/algorand/components/Notes/NoNotes';
import { NoteCard } from 'src/view/algorand/components/Notes';

export const NoteList = (props: any) => {
  const modalRef = useRef<any>();

  const dispatch = useDispatch();

  const notes = useSelector(selector.selectNotes);

  const loading = useSelector(selector.selectLoading);

  useEffect(() => {
    dispatch({
      type: noteActions.LOAD_START,
    });
    if (props.isPoolNote) {
      dispatch(noteActions.doPoolFetch(props.assetId));
    } else {
      dispatch(noteActions.doFetch(props.assetId));
    }
  }, []);

  useEffect(() => {
    (window as any).$(modalRef.current).modal('show');
    (window as any)
      .$(modalRef.current)
      .on('hidden.bs.modal', props.onClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <div ref={modalRef} className="modal" tabIndex={-1}>
      <div className="modal-dialog modal-sm modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Notes</h5>
            <button
              type="button"
              className="btn-close btn"
              data-dismiss="modal"
              disabled={loading}
            >
              <span></span>
            </button>
          </div>
          <div className="modal-body">
            {loading ? (
              <Spinner />
            ) : notes?.length === 0 ? (
              <NoNotes />
            ) : (
              notes?.map((note, index) => {
                return (
                  <NoteCard
                    key={`note-${index}`}
                    note={note}
                    onEdit={() => props.onEdit(note)}
                    onDelete={() => props.onDelete(note)}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>,
    (document as any).getElementById('modal-root'),
  );
};
