import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Loader2Icon } from 'lucide-react';

import api from '../lib/axios';
import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // const res = await fetch("http://localhost:5001/api/notes")
        // const data = await res.json()

        const res = await api.get("/notes")
        console.log(res.data)
        setNotes(res.data)
        setIsRateLimited(false)
      } catch (error) {
        console.log("Error fetching Notes : ", error)
        if(error.response.status === 429){
          setIsRateLimited(true)
        } else {
          toast.error("Failed to load Notes")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchNotes();
  },[])
  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI/>}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-primary flex items-center justify-center"><Loader2Icon className="animate-spin size-10" /></div>}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(note => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
