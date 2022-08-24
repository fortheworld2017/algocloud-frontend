import config from 'src/config';
import Errors from 'src/modules/shared/error/errors';
import NoteService from './noteService';

const prefix = 'NOTE';

const noteActions = {
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,
  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,
  DELETE_SUCCESS: `${prefix}_DELETE_SUCCESS`,
  LOAD_START: `${prefix}_LOAD_START`,
  LOAD_END: `${prefix}_LOAD_END`,

  doFetch: (assetId) => async (dispatch) => {
    const data = await NoteService.getNotes(assetId);
    console.log('called doFetch...');
    dispatch({
      type: noteActions.FETCH_SUCCESS,
      payload: data.rows,
    });
  },

  doCreateNote: (note) => async (dispatch) => {
    try {
      dispatch({
        type: noteActions.CREATE_STARTED,
      });
      const data = await NoteService.createNote(note);

      dispatch({
        type: noteActions.CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: noteActions.CREATE_ERROR,
      });
    }
  },
  doEditNote: (note) => async (dispatch) => {
    try {
      dispatch({
        type: noteActions.CREATE_STARTED,
      });
      const data = await NoteService.editNote(note);

      dispatch({
        type: noteActions.CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: noteActions.CREATE_ERROR,
      });
    }
  },
  doDeleteNote: (id) => async (dispatch) => {
    try {
      dispatch({
        type: noteActions.LOAD_START,
      });
      const data = await NoteService.deleteNote(id);

      dispatch({
        type: noteActions.DELETE_SUCCESS,
        payload: data,
      });
      dispatch({
        type: noteActions.LOAD_END,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: noteActions.CREATE_ERROR,
      });
    }
  },
  doPoolFetch: (poolId) => async (dispatch) => {
    const data = await NoteService.getPoolNotes(poolId);
    console.log('called doFetch...');
    dispatch({
      type: noteActions.FETCH_SUCCESS,
      payload: data.rows,
    });
  },

  doCreatePoolNote: (note) => async (dispatch) => {
    try {
      dispatch({
        type: noteActions.CREATE_STARTED,
      });
      const data = await NoteService.createPoolNote(note);

      dispatch({
        type: noteActions.CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: noteActions.CREATE_ERROR,
      });
    }
  },
  doEditPoolNote: (note) => async (dispatch) => {
    try {
      dispatch({
        type: noteActions.CREATE_STARTED,
      });
      const data = await NoteService.editPoolNote(note);

      dispatch({
        type: noteActions.CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: noteActions.CREATE_ERROR,
      });
    }
  },
  doDeletePoolNote: (id) => async (dispatch) => {
    try {
      dispatch({
        type: noteActions.LOAD_START,
      });
      const data = await NoteService.deletePoolNote(id);

      dispatch({
        type: noteActions.DELETE_SUCCESS,
        payload: data,
      });
      dispatch({
        type: noteActions.LOAD_END,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: noteActions.CREATE_ERROR,
      });
    }
  },
};

export default noteActions;
