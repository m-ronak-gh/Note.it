import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeftIcon, Loader2Icon, TrashIcon } from "lucide-react";

import api from '../lib/axios';

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res =await api.get(`/notes/${id}`);
        setNote(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error in fetching Note : ", error)
        if(error.response.status === 429){
          setIsRateLimited(true);
          toast.error("Slow down!", {
            duration:4000
          });
        } else {
          toast.error("Failed to load Note")
        }
      } finally {
        setLoading(false)
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if(!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`)
      toast.success("Note deleted successfully")
    } catch (error) {
      console.log("Error in handleDelete : ",error)
      toast.error("Failed to delete note")
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated Successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if(loading){
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <Loader2Icon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost rounded-full">
              <ArrowLeftIcon className="size-5" />
              Back to Notes
            </Link>
            <button onClick={handleDelete} className="btn btn-error btn-outline rounded-full">
              <TrashIcon className="size-5" />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                  className="input input-bordered rounded-full"
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="write your note here..."
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                  className="textarea textarea-bordered h-32 rounded-3xl"
                />
              </div>

                <div className="card-actions justify-end">
                  <button onClick={handleSave} className="btn btn-primary rounded-full" disabled={saving}>
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteDetailPage;
