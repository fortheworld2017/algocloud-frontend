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

const schema = yup.object().shape({
  title: yupFormSchemas.string(i18n('note.name'), {
    required: true,
    max: 1024,
  }),
  description: yupFormSchemas.string(
    i18n('note.description'),
    {
      required: true,
      max: 2083,
    },
  ),
});

export const NoteModal = (props: any) => {
  const modalRef = useRef<any>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [originalNote, setOriginalNote] = useState({});

  const loading = useSelector(selector.selectLoading);

  useEffect(() => {
    if (props.note) {
      setTitle(props.note.title);
      setDescription(props.note.description);
      setOriginalNote(props.note);
      setIsEdit(true);
    }
  }, [props]);

  useEffect(() => {
    (window as any).$(modalRef.current).modal('show');
    (window as any)
      .$(modalRef.current)
      .on('hidden.bs.modal', props.onClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (submitted && !loading) {
      (window as any).$(modalRef.current).modal('hide');
      props.onClose();
    }
  }, [loading]);

  const onConfirm = () => {
    (window as any).$(modalRef.current).modal('hide');
    return props.onConfirm({ title, description });
  };

  const [initialValues] = useState(() => {
    return {
      title: '',
      description: '',
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const handleChangeTitle = (t) => {
    setTitle(t);
  };

  const handleChangeDesc = (t) => {
    setDescription(t);
  };

  const onSubmit = (values) => {
    setSubmitted(true);
    if (isEdit) {
      if (props.isPoolNote) {
        const data = {
          ...originalNote,
          ...values,
        };
        dispatch(noteActions.doEditPoolNote(data));
      } else {
        const data = {
          ...originalNote,
          ...values,
        };
        dispatch(noteActions.doEditNote(data));
      }
    } else {
      if (props.isPoolNote) {
        const data = {
          id: uniqueId(),
          poolId: props.assetId,
          ...values,
        };
        dispatch(noteActions.doCreatePoolNote(data));
      } else {
        const data = {
          id: uniqueId(),
          assetId: props.assetId,
          ...values,
        };
        dispatch(noteActions.doCreateNote(data));
      }
    }
  };

  return ReactDOM.createPortal(
    <div ref={modalRef} className="modal" tabIndex={-1}>
      <div className="modal-dialog modal-sm modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Create a Note ...
            </h5>
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
            <FormWrapper>
              <FormProvider {...form}>
                <div className="row">
                  <div className="col-12">
                    <InputFormItem
                      name="title"
                      label={i18n('note.name')}
                      required={true}
                      autoFocus
                      value={title}
                      onChange={handleChangeTitle}
                    />
                  </div>
                  <div className="col-12">
                    <TextAreaFormItem
                      name="description"
                      label={i18n('note.description')}
                      required={true}
                      value={description}
                      onChange={handleChangeDesc}
                    />
                  </div>
                </div>
                <div className="form-buttons">
                  <button
                    type="button"
                    className="btn btn-light btn-sm"
                    data-dismiss="modal"
                    disabled={loading}
                  >
                    {props.cancelText}
                  </button>
                  <button
                    type="button"
                    onClick={form.handleSubmit(onSubmit)}
                    className="btn btn-primary btn-sm"
                    disabled={loading}
                  >
                    {loading && (
                      <Spinner
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          display: 'inline',
                        }}
                        color="success"
                        spin="sm"
                      />
                    )}
                    {!isEdit
                      ? i18n('note.modal.okText')
                      : i18n('note.modal.edit')}
                  </button>
                </div>
              </FormProvider>
            </FormWrapper>
          </div>
        </div>
      </div>
    </div>,
    (document as any).getElementById('modal-root'),
  );
};
